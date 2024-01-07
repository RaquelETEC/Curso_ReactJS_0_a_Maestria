import React from 'react'

export const UserDatails = ({nome, idade , profissao}) => {
  return (
    <div>
      
        {idade >= 18 ? 
       
        <p> <b>A PESSOA PODE TIRAR CARTEIRA DE MOTORISTA</b>  <br/>
        Nome: {nome}  <br/>
        Idade: {idade}  <br/>
        profissao: {profissao} <br/>
        </p>:
        <p>
        <b>A PESSOA NÃO PODE TIRAR CARTEIRA DE MOTORISTA</b> <br/>
        Nome: {nome}  <br/>
        Idade: {idade}  <br/>
        profissao: {profissao} <br/>
        </p>}
    </div>
  )
}

export default UserDatails; 