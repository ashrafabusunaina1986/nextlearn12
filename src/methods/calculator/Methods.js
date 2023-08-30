const initial = {
    result: "0",
    currentNum: "",
    o: false,
    eq: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'n':
            return {
                ...state,
                o: false,
                currentNum: state['currentNum'] === '' ? action.payload :
                    state.eq ?
                        action.payload :
                        state['currentNum'].concat(action.payload),
                eq: false,
                result: eval(state['currentNum'].concat(action.payload))
            }
        case 'o':
            return {
                ...state,
                o: true,
                currentNum: OperandCurrentNum(state, action),
                result: state.result,
                eq: false
            }
        case 'delall':
            return {
                ...state,
                o: false,
                currentNum: state['currentNum'].replace(state.currentNum, ''),
                result: '0',
                eq: false
            }
        case 'delel':
            return {
                o: (state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('-') ||
                    state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('+') ||
                    state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('*') ||
                    state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('/')) ? true : false,
                currentNum: cdelel(state),
                result: state.result,
                eq: true
            }
        case 'equal':
            return {
                o: isOperand(state),
                currentNum: CurrentNum(state),
                result: Result(state),
                eq: true
            }
        default:
            return state

    }

}

const rdelel = (state) => {
    if (state.eq) {
        if (state.currentNum === '') {
            return '0'
        }
        if (state.currentNum.length === 1) {
            return state.currentNum
        }
        if (state.currentNum.length > 1) {
            return state.o ?
                eval(state['currentNum'].slice(0, state['currentNum'].length - 1)) :
                eval(state['currentNum'].slice(0, state['currentNum'].length - 2))
        }
    }

}
const cdelel = (state) => {
    if (state.eq) {
        return state.currentNum
    } else {
        if (state.currentNum === '') {
            return ''
        } else {
            return state['currentNum'].slice(0, state['currentNum'].length - 1)
        }
    }

}
const OperandCurrentNum = (state, action) => {

    if (!state.o) {
        if (state.currentNum === '') {
            return ''
        }
        if (state.currentNum.length >= 1) {
            return state.eq ? state.result.toString().concat(action.payload) : state.currentNum.concat(action.payload)
        }
    } else {
        if (state.currentNum === '') {
            return ''
        }
        if (state.currentNum.length >= 1) {
            return state.eq ? state.result.toString().concat(action.payload) : state.currentNum.slice(0, state.currentNum.length - 1).concat(action.payload)
        }

    }
}
const isOperand = (state) => {
    return (state.currentNum === '' || state.currentNum.length === 1) ? false : (state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('-') ||
        state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('+') ||
        state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('*') ||
        state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('/')) ? true : false
}

const Operand = (state) => {
    return ((state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('-') ||
        state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('+') ||
        state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('*') ||
        state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('/')) ? true : false)
}
const CurrentNum = state => {
    return (
        (state.currentNum === '') ? '' : state.currentNum
    )
}


const Result = state => {

    if (!state.o) {
        if (state.currentNum === '') {
            return '0'
        }
        if (state.currentNum.length === 1) {
            return state.currentNum
        }
        if (state.currentNum.length > 1) {
            return Operand(state) ? eval(state['currentNum']) :
                eval(state.currentNum.slice(0, state.currentNum.length - 1))
        }
    } else {
        return Operand(state) ? eval(state['currentNum']) :
            eval(state.currentNum.slice(0, state.currentNum.length - 1))
    }
}
export { initial, reducer, rdelel, cdelel, OperandCurrentNum, Operand, isOperand, CurrentNum, Result }