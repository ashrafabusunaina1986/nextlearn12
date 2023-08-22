'use client'

import React, { useState } from 'react'
import Ul from '../../components/Menu/Ul'
import Menu from '../../components/Menu/Menu'
import styles from './page.module.css'

const items = [
  {
    id: 1,
    title: "What is React"
  },
  {
    id: 2,
    title: "What is Next"
  },
  {
    id:3,
    title:"Math"
  }
]

const content = [
  [
    "The React.js framework is an open-source JavaScript framework and library developed by Facebook. It’s used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
    "In React, you develop your applications by creating reusable components that you can think of as independent Lego blocks. These components are individual pieces of a final interface, which, when assembled, form the applications entire user interface. "
  ],
  [
    "User Interface - how users will consume and interact with your application.",
    "Routing - how users navigate between different parts of your application.",
    "Data Fetching - where your data lives and how to get it."
  ],
  [
    "Mathematics is an area of knowledge that includes the topics of numbers, formulas and related structures, shapes and the spaces in which they are contained, and quantities and their changes. These topics are represented in modern mathematics with the major subdisciplines of number theory,[1] algebra,[2] geometry,[1] and analysis,[3][4] respectively. There is no general consensus among mathematicians about a common definition for their academic discipline.",
    "Most mathematical activity involves the discovery of properties of abstract objects and the use of pure reason to prove them. These objects consist of either abstractions from nature or—in modern mathematics—entities that are stipulated to have certain properties, called axioms. A proof consists of a succession of applications of deductive rules to already established results. These results include previously proved theorems, axioms, and—in case of abstraction from nature—some basic properties that are considered true starting points of the theory under consideration.[5]",
    "Mathematics is essential in the natural sciences, engineering, medicine, finance, computer science and the social sciences. Although mathematics is extensively used for modeling phenomena, the fundamental truths of mathematics are independent from any scientific experimentation. Some areas of mathematics, such as statistics and game theory, are developed in close correlation with their applications and are often grouped under applied mathematics. Other areas are developed independently from any application (and are therefore called pure mathematics), but often later find practical applications.[6][7] The problem of integer factorization, for example, which goes back to Euclid in 300 BC, had no practical application before its use in the RSA cryptosystem, now widely used for the security of computer networks.",
    "Historically, the concept of a proof and its associated mathematical rigour first appeared in Greek mathematics, most notably in Euclid's Elements.[8] Since its beginning, mathematics was essentially divided into geometry and arithmetic (the manipulation of natural numbers and fractions), until the 16th and 17th centuries, when algebra[a] and infinitesimal calculus were introduced as new areas. Since then, the interaction between mathematical innovations and scientific discoveries has led to a rapid lockstep increase in the development of both.[9] At the end of the 19th century, the foundational crisis of mathematics led to the systematization of the axiomatic method,[10] which heralded a dramatic increase in the number of mathematical areas and their fields of application. The contemporary Mathematics Subject Classification lists more than 60 first-level areas of mathematics."
  ]
]

function page() {
  const [selectIndex,setSelectIndex]=useState(1)
  return (
    <div className={styles.container}>
      <Menu items={items} setIndex={setSelectIndex}/>
      <Ul index={selectIndex} content={content}/>
    </div>
  )
}

export default page