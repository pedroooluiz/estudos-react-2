
import apiDeputados from '@/api/apiDeputados'
import Pagina from '@/components/Pagina'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const index = (props) => { //usar o props para paremetro
  //criar uma variável para receber o props.fotos
  const fotosDeputados = props.fotos

  return (
    //para poder importar corretamente a Pagina precisa escrever Pagina e apertar ctrl + space vai aparecer a pagina
    <Pagina titulo="Deputados">
      <Row md={5}>
        {fotosDeputados.map(item => (
          <Col>
            <Card>
              <Card.Img variant="top" src={item.urlFoto} />
              <Card.Body>
                <Card.Title>{item.nome}</Card.Title>
                <p>Partido: {item.siglaPartido}</p>
                <Link className='btn btn-danger' href={'/deputados/' + item.id}>Detalhes...</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Pagina>
    //depois criar um folder chamado api e dentro dele criar uma pagina chamada api(nome da api).js
  )
}

export default index

//passo a passo para puxar as coisas da api
// 1 - usar a estrutura a baixo
export async function getServerSideProps(context) {

  const deputados = await apiDeputados.get('/deputados')
  const fotos = deputados.data.dados


  return {
    props: { fotos },
  }
}