import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import Box from '@material-ui/core/Box'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Aryama</title>
      </Head>
      <main>
      <Container >
      <Grid container spacing={2}>
        <Grid item xs={12}>
         <Card className= {styles.CustomDesign}>
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Hey, I&apos;m Aryama 👋
        </Typography>
        <Typography variant="body2">
        I work as a Software Developer and write code to build backend of a Delivery Service Platform. I am currently exploring the field of User Experience Design. Besides writing code, I love to paint and watch animated movies and TV shows.
        </Typography>
            </CardContent>
           
          </Card>
        </Grid>
        <Grid item xs={12} md={6} spacing={2}>
        <Grid item xs={12}>
        <Card className= {styles.CustomDesign}>
        <CardContent>
        <center>
        <a href="https://github.com/aryamasinha">
          <Image
      src="/1.jpg"
      alt="img"
      width={150}
      height={150}
    /></a></center>
          <Typography variant="body2">
          📇 Visit my <span className={styles.CustomText}> <a href="https://github.com/aryamasinha">Github</a> </span>space to check out my latest projects. Collaborations are open! 🤝
          </Typography>
        </CardContent>
          </Card>
          </Grid>
          <br></br>
          <Grid item xs={12}>
        <Card className= {styles.CustomDesign2}>
        <CardContent>
          <Typography variant="body2">
          🎨 I post pictures of Watercolor paintings occasionally on <span className={styles.CustomText}> <a href="https://www.instagram.com/__ausdruck__">Ausdruck </a> </span> 
          </Typography>
          <center>
          {/*<Image
      src="/3.png"
      alt="img"
      width={250}
      height={250}
          /> */}</center>
        </CardContent>
          </Card>
        </Grid>

        <br></br>
          <Grid item xs={12}>
        <Card className= {styles.CustomDesign}>
        <CardContent>
          <Typography variant="body2">
          📮 Subscribe to receive my (very rare) notes and updates via email: 
          <br></br>
          <br></br>
          
          <input className={styles.customInput} placeholder="your@email.com"></input> 
          <br></br>
          <br></br>
          <center>
            <a>
          <div className={styles.customButton}>Subscribe</div></a>
          </center>
          </Typography>
        </CardContent>
          </Card>
        </Grid> 
        </Grid>

       <Grid item xs={12} md={6} spacing={2}>
       <Grid item xs={12}>
        <Card className= {styles.CustomDesign3}>
        <CardContent>
          <Typography variant="body2">
          📍 Visit my profile on <span className={styles.CustomText}> <a href="https://www.behance.net/aryamasinha"> Behance </a></span> for my upcoming design projects.
          </Typography>
        </CardContent>
          </Card>
        </Grid>
        <br></br>
          <Grid item xs={12}>
        <Card className= {styles.CustomDesign}>
        <CardContent>
          <Typography variant="body2">
          

          📚 I'm currently reading <span className={styles.CustomText}> <a href="https://medium.com/@nina.semczuk/5-lifelong-lessons-from-the-magic-of-thinking-big-by-david-schwartz-6b33f5b21fae/"> The Magic Of Thinking Big </a></span> by David Joseph Schwartz.<br></br> <br></br>
            What do you need in order to become successful? Is it talent or intellect or is it just a habit of thinking in such a way that all you’ve ever wanted will be sitting right in front of you? Dr. Schwartz has put together a few useful methods to achieve all those things you want but never dared to get.
         
          <br></br>
          </Typography>
        </CardContent>
          </Card>
        </Grid>
        <br></br>
        
        <Grid item xs={12}>
        <Card className= {styles.CustomDesign}>
        <CardContent>
          <center>
          <Typography variant="body2">
          Where you can reach me 👇 
      
        
          </Typography>
          <br>
          </br>
          <a href="https://twitter.com/Aryamasinha">
          <div className={styles.customButton}>Say hi on Twitter</div></a>
          <br></br>
          <div className={styles.customButton} onClick={() => window.location = 'mailto:aryamasinha864@gmail.com'}>Drop me a line</div>
          </center>
        </CardContent>
          </Card>
        </Grid> 
      </Grid>
      </Grid>
    </Container>
      </main>
    </div>
  )
}







    
