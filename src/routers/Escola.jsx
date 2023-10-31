import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {yupResolver} from  '@hookform/resolvers/yup';
import * as yup from 'yup'


function Cliente(){
 /*Hook useState */
 const[listaCliente, setListaCliente]= useState([]);

/*biblioteca de validação de campos */
 const scheme = yup.object({
  nome:yup.string().required("O campo nome obrigatório"),
  email:yup.string().email("Digite um email valido").required("O Campo email obrigatório"),
  cpf:yup.string().min(11, "CPF deve conter pelo menos 11 digitos").required("Campo CPF obrigátório"),
})
.required();

/*função que cria os metodos register e handleSubimit para chamar o form e validar */
 const {register,handleSubmit,formState:{errors},setValue, setFocus,} = useForm({
  resolver:yupResolver(scheme)
})


/*função  inserir cliente  */
function inserirCliente(cliente){
  setListaCliente([...listaCliente,cliente]);
}

/*criando a API para ser consumida */

function buscarCep(e){
  const cep = e.target.value.replace(/\D/g,'');
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((res)=> res.json())
    .then((dados)=> {
      setValue('rua', dados.logradouro);
      setValue('bairro', dados.bairro);
      setValue('cidade', dados.localidade);
      setFocus('numero');
    });
}

  return(
    <>
    <form onSubmit={handleSubmit(inserirCliente)}>
      <fieldset>
        <legend>Dados Pessoais:</legend>
        <label>
          Nome:
          <input type="text" {...register('nome')}/>
          <span>{errors.nome?.message}</span>
        </label>
        <label>
         Email:
          <input type="text" {...register('email')}/>
          <span>{errors.email?.message}</span>
        </label>
        <label>
          CPF:
          <input type="text"{...register('cpf')}/>
          <span>{errors.cpf?.message}</span>
        </label>

      </fieldset>

      <fieldset>
        <legend>Endereço:</legend>
        <label>
          CEP:
          <input type="text" {...register('cep')} onBlur={buscarCep}/>
        </label>
         <label>
          RUA:
          <input type="text" {...register('rua')}/>
         </label>
         <label>
          BAIRRO:
          <input type="text" {...register('bairro')}/>
         </label>

         <label>
          CIDADE:
          <input type="text" {...register('cidade')}/>
         </label>

         <label>
          NUMERO:
          <input type="text" {...register('numero')}/>
         </label>
                 
      <div>
        <button type="submit">CADASTRAR</button>
        <button type="reset">Limpar</button>
      </div>

      </fieldset>
    </form>

    </>
  )
}
export default Cliente