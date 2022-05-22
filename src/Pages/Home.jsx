import React, { Component } from 'react'
import Hero from '../Components/Hero/Hero'
import Navbar from '../Components/Navbar/Navbar'
import Panel from '../Components/Panel/Panel'
import Footer from '../Components/Footer/Footer'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import SpaceHero from '../Components/SpacerHero/SpaceHero'

ChartJS.register(ArcElement, Tooltip, Legend);

const state = {
  labels: ['Avansa', 'Innova', 'Terios','Ford', 'SMK'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 30, 20, 51, 86]
    }
  ]
}

export default class Home extends Component {
  render() {
    return (
      <div>
          <Navbar></Navbar>
          <Hero></Hero>
          <Panel show="true" cari="false"></Panel>
          
          <div className="row justify-content-center my-5">
            <div className="col-4">
              <h4 className="text-center fw-bold">Data mobil terlaris</h4>
              <Pie
                options={{
                  title:{
                    display:true,
                    text:'Average Rainfall per month',
                    fontSize:20
                  },
                  legend:{
                    display:true,
                    position:'right'
                  }
                }}
                data={state}
              />
            </div>
          </div>
          <Footer></Footer>
      </div>
    )
  }
}
