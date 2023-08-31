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
                result: ResultNumber(state, action),
                eq: false
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
                currentNum: cdelel(state),
                o: signPlace(state),
                result: Resultdel(state),
                eq: state.eq ? true : false
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

const signPlace = (state) => {
    if (!Operand(state, 1) && Operand(state, 2) ||
        !Operand(state, 1) && !Operand(state, 2)) {
        return false
    }
    if (Operand(state, 1) && !Operand(state, 2)) {
        return true
    }
}

const Resultdel = (state) => {
    if (state.eq) {
        return state.result
    } else {

        if (state.currentNum.length === 1 || state.currentNum.length === 0) {
            return '0'
        }
        if (state.currentNum.length > 1) {
            if(state.o){
                if(state.currentNum.length===2 && state.currentNum==='0'){
                    return '0'
                }
                return (state.currentNum.slice(0,state.currentNum.length-1))
            }else{
                if((!Operand(state,1) && !Operand(state,2))){
                    return eval(state.currentNum.slice(0,state.currentNum.length-1))
                }
                if((!Operand(state,1) && Operand(state,2))){
                    return eval(state.currentNum.slice(0,state.currentNum.length-2))
                }
            }
            
        }
        // if (state.currentNum.length > 3) {
        //     return state.o ?
        //         eval(state.currentNum.slice(0, state.currentNum.length - 1)) :
        //         eval(state.currentNum.slice(0,state.currentNum.length - 2))
        // }
    }
}

const ResultNumber = (state, action) => {

    if (!state.eq) {
        if (state.currentNum.length === 0) {
            return action.payload
        }
        if (state.currentNum.length === 1 ||
            state.currentNum.length > 1 && !state.o) {
            return eval(state.currentNum.concat(action.payload))
        }
        if (state.currentNum.length > 1) {
            return state.o ?
                eval(state.currentNum.concat(action.payload)) :
                eval(state.currentNum.slice(0, state.currentNum.length - 1))
        }
    } else {
        if (state.currentNum.length === 0) {
            return action.payload
        }
        if (state.currentNum.length === 1 ||
            state.currentNum.length > 1 && !state.o) {
            state.currentNum = ''
            return eval(state.currentNum.concat(action.payload))
        }
        if (state.currentNum.length > 1) {
            return state.o ?
                eval(state.currentNum.concat(action.payload)) :
                eval(state.currentNum.slice(0, state.currentNum.length - 1))
        }
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
        if (state.currentNum.length === 0) {
            return ''
        } else {
            return state['currentNum'].slice(0, state['currentNum'].length - 1)
        }
    }

}
const OperandCurrentNum = (state, action) => {
    if (state.currentNum.length === 0) {
        return '0'.concat(action.payload)
    }
    if (!state.o) {
        if (state.currentNum.length >= 1) {
            return state.eq ? state.result.toString().concat(action.payload) :
                state.currentNum.concat(action.payload)
        }
    } else {
        if (state.currentNum.length >= 1) {
            return state.eq ? state.result.toString().concat(action.payload) :
                state.currentNum.slice(0, state.currentNum.length - 1).concat(action.payload)
        }
    }
}
const isOperand = (state) => {
    return (state.currentNum === '' || state.currentNum.length === 1) ? false : (state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('-') ||
        state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('+') ||
        state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('*') ||
        state['currentNum'].slice(state['currentNum'].length - 2, state['currentNum'].length - 1).includes('/')) ? true : false
}

const Operand = (state, d) => {
    return ((state['currentNum'].slice(state['currentNum'].length - d, state['currentNum'].length - (d - 1)).includes('-') ||
        state['currentNum'].slice(state['currentNum'].length - d, state['currentNum'].length - (d - 1)).includes('+') ||
        state['currentNum'].slice(state['currentNum'].length - d, state['currentNum'].length - (d - 1)).includes('*') ||
        state['currentNum'].slice(state['currentNum'].length - d, state['currentNum'].length - (d - 1)).includes('/')) ? true : false)
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
            return Operand(state, 2) ? eval(state['currentNum']) :
                eval(state.currentNum.slice(0, state.currentNum.length - 1))
        }
    } else {
        return Operand(state, 2) ? eval(state['currentNum']) :
            eval(state.currentNum.slice(0, state.currentNum.length - 1))
    }
}
export { initial, reducer, rdelel, cdelel, OperandCurrentNum, Operand, isOperand, CurrentNum, Result }