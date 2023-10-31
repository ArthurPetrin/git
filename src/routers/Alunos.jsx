import {useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import {FaRegTimesCircle} from 'react-icons/fa'

function Alunos() {

  //Hook useParams
  let {id} =useParams();

  //Hook useState

  const [novo, setNovo]= useState({
    id,
    nome:'',
    idade:''
  })
  //criando a variavel metodo post

  let metodo ='post'
  if(id){
    metodo='put'
  }

  const handleChange = (e)=>{
    setNovo({...novo, [e.target.name]:e.target.value})
  }

  const handleSubmit =(e)=>{
    e.preventDefault();
    fetch(`http://localhost:5000/alunos/${id ? id:''}`,{
      method:metodo,
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(novo),
    }).then(()=>{
      window.location= '/';
    });
  }

  useEffect(()=>{
    if(id){
      fetch(`http://localhost:5000/alunos/${id}`)
      .then((resp)=>{
        return resp.json();
      })
      .then((data)=>{
        setNovo(data)
      })
    }
  }, [id]);

  return(
  <>
  <h1>Cadastro de Alunos</h1>
  <form onSubmit={handleSubmit}>
    <input
    type="text"
    name="nome"
    value={novo.nome}
    placeholder="Digite seu nome"
    onChange={handleChange}
    />
    <input
    type="text"
    name="idade"
    value={novo.idade}
    placeholder="Digite sua idade"
    onChange={handleChange}
    />
    <button type="submit">Cadastrar</button>
    <Link to="/listaralunos">
      <FaRegTimesCircle/>
    </Link>
  </form>
  </>
  )
  
}

export default Alunos;