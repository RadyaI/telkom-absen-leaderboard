import { useEffect, useState } from "react"
import axios from "axios"
import styled from "styled-components"

import person from './assets/person.svg'


export default function App() {

  const [userData, setUserData] = useState(
    [
      { number: 1, nama_siswa: "Muhammad Radya", kelas: "XII RPL 1", time: "04:54" },
      { number: 2, nama_siswa: "Muhammad Fulan", kelas: "XII RPL 2", time: "04:55" }
    ]
  )


  useEffect(() => {
    axios.get('https://siswa.smktelkom-mlg.sch.id/Thefirst_siswa/tm_thefirst').then(
      (res) => {
          console.log(res)
      }
    )
  }, [])

  function Data() {
    const display = userData.map((i, index) =>
      <div className="card" key={index}>
        <div className="user">
          <div className="img-container"> <img src={person} alt="user" /> </div>
          <div className="user-info">
            {i.nama_siswa} | {i.kelas} <br />
            <small>{i.time}</small>
          </div>
        </div>
        <div className="number">
          <div className="top">{i.number}</div>
        </div>
      </div>
    )

    return display
  }


  return (
    <Container>
      <Card className="card">
        <Top3>
          <div className="user"><img src={person} alt="user" /></div>
          <div className="user"><img src={person} alt="" /></div>
          <div className="user"><img src={person} alt="" /></div>
          <div className="name">
            <div className="1">Muhammad Radya I | XII RPL 2</div>
            <div className="1">Muhammad Radya I | XII RPL 2</div>
            <div className="1">Muhammad Radya I | XII RPL 2</div>
          </div>
        </Top3>
        <Other>
          <Data></Data>
        </Other>
      </Card>
    </Container>
  )
}

const Container = styled.div`
    background-color: #FFF6E9;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
  background-color: #FF7F3E;
  width: 80%;
  height: 90%;
  border-radius: 15px;
  overflow-y: auto;
`

const Top3 = styled.div`
  width: 90%;
  height: 40%;
  margin: 0 auto;
  margin-top: 10px;
  border: 5px solid #FFF6E9;
  border-radius: 15px 15px 0 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  .user{
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  .name{
    position: absolute;
    bottom: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-weight: bold;
    color: #FFF6E9;
  }

  .user img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .user:nth-child(2){
    margin-bottom: 50px;
  }

  @media only screen and (max-width:700px){
    height: 30%;

    .user{
      width: 60px;
      height: 60px;
      margin-top: 30px;
    }

    .user:nth-child(2){
       margin-bottom: 100px;
    }
  }

  `

const Other = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 50px;
  border-radius: 0 0 15px 15px;

  .card{
    background-color: #FFF6E9;
    margin: 0 auto;
    margin-top: 20px;
    border-radius: 5px;
    width: 90%;
    height: auto;
    padding: 5px 0;
    display: flex;
  }


  .card .user{
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: bold;
  }

  .card .user .img-container{
    width: 50px;
    height: 50px;
    margin-left: 10px;
    border-radius: 50%;
  }

  .card .user .img-container img{
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .card .number{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-right: 15px;
  }

  .card .number .top{
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
  }
`