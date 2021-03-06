/** @jsx jsx*/
import { jsx, Styled } from 'theme-ui'
import Title from './title'
import useSiteMetadata from "../hooks/use-site-metadata"
import useMinimalBlogConfig from "../hooks/use-minimal-blog-config"
import Navigation from "./navigation"
import { Flex, Box } from "@theme-ui/components"

const ForBusinesses = () => {
  const { siteTitle } = useSiteMetadata()
  const { navigation: nav, externalLinks, basePath } = useMinimalBlogConfig()

  return (
    <section
      sx={{ 
        a: {
          display: 'inline-block',
          margin: '2px',
          color: '#333333',
          letterSpacing: '1px',
          transaction: 'all 0.1s linear',
          padding: '0.7rem 1rem',
          "&:hover": {
            color: '#ccc',
            fontWeight: 'bolt',
          },
        },      
      }}>
      <Title text="Para Empresas" />
      <Box mb={4} sx={{border: '1px solid', padding: '2rem'}}>
        <b>MISSÃO</b>
        <hr />  
        Estar comprometidos com práticas de desenvolvimento de tecnologia que
        incluem: transparência, qualidade, serviço, aprendizado, inclusão, respeito e justiça. 
        <br /><br />

        <b>VISÂO</b>
        <hr />          
        Meus valores orientam minha conduta com os outros, com meus clientes e com as comunidades 
        das quais faço parte. Todos os meus projetos de consultoria, projetos de código aberto e 
        eventos da comunidade são regidos pelo seguinte Código de Conduta.
        <a href="/jsgo-conduct-code" alt="JSGO Conduct Code" target="_blank">JSGO Conduct Code</a>
        <br /><br />
        
        {/* <a href="https://agilemanifesto.org/iso/ptbr/manifesto.html">Manifesto para Desenvolvimento Ágil de Software</a>
        <a href="https://agilemanifesto.org/iso/ptbr/principles.html">Princípios do Software Ágil</a> */}

        <b>VALORES</b>
        <hr />  

        <b>Qualidade</b>
        <br />
        Orgulhamo-me do meu trabalho e me dedico a escrever um bom software. 
        Participo de revisões rigorosas de código. 
        Como organização, gosto de fazer parceria com aqueles que se sentem da 
        mesma forma com a qualidade de seu trabalho, mantendo um ambiente acolhedor 
        para iniciantes.
        <br /><br />

        <b>Orientado a serviço</b>
        <br />
        Priorizo as relações de trabalho a longo prazo em detrimento do valor 
        a curto prazo, e beneficiando os meus clientes nos resultados finais. 
        Estou comprometido em melhorar o estado dos projetos em que trabalho 
        e as equipes com as quais trabalho.
        <br /><br />

        <b>Aprendizagem e Educação</b>
        <br />
        Procuro oportunidades para apoiar novos alunos. Da mesma forma, acredito que, para permanecar
        especialista, em meu campo, preciso aprender continuamente através da prática. 
        promovendo uma cultura de perguntas e estimulando uma mentalidade 
        de aprendizado para meus projetos e membros da equipe.
        <br /><br />

        <b>Inclusão</b>
        <br />
        Verificar regularmente meus privilégios e trabalhar para examinar continuamente 
        o viés em relação às pessoas marginalizadas não representadas em meus projetos 
        e equipes. Priorizando a inclusão de pessoas marginalizadas em detrimento de pessoas 
        mais privilegiadas. Aplicando o Código de Conduta da JSGO Group internamente 
        e dentro de cada projeto, organização e evento em que participamos ou servimos.
        <br /><br />

        <b>Respeito</b>
        <br />
        Respeitar a experiência de outros campos e principalmente das pessoas 
        que usam o software em que trabalhamos. O desenvolvimento de software é 
        uma experiência valiosa, mas limitada. Ele não pode substituir ou qualificar 
        quem sou, buscando preencher outros conhecimentos necessários para 
        aumentar a inclusão na produção da web. Da mesma forma, nas equipes de 
        projeto, tratando todos os participantes do projeto com respeito e Espero 
        o mesmo em troca.
        <br /><br />

        <b>Justiça social</b>
        <br />
        Priorizo a segurança e o bem-estar das pessoas marginalizadas em detrimento 
        do trabalho técnico, e tomo o cuidado de evitar soluções tecnológicas onde 
        os processos cívicos sejam mais apropriados. Não me envolvo em projetos que 
        violem o Código de Conduta do JSGO Group ou prejudiquem pessoas marginalizadas.
        <hr />

        {/* <section>
          <a href="/about">SOBRE MIM</a>        
          <a href="https://calendly.com/henriquesilvadev/work">MINHA AGENDA</a>
          <a href="https://join.slack.com/t/henriquesilvadev/shared_invite/zt-dczfn4xt-7J_HA1C2OLzo4aIs1S39Ww">MEU LOCAL DE TRABALHO</a>
          <hr />
          <a href="me/hhsilva">Meu Telegram</a>
          <a href="https://api.whatsapp.com/send?phone=+5562985849729">Meu WhatsApp</a>
          <a href="mailto://contato@henriquesilva.dev">E-mail: contato@henriquesilva.dev</a>
          
        </section> */}
      </Box>
    </section>      
  )
}

export default ForBusinesses