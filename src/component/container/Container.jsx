import React from 'react'
import "./container.css"
export const Container = () => {
  return (
    <div class="container">
        <header>
            <img src="../public/circle.svg" alt="Circle" class="icon"/>
            <button>Free Consultation</button>
        </header>
        <h1 class="design-title">Design solutions made easy</h1>
        <p class="design-desc">With over ten years of experience in various design disciplines, I’m your one-stop shop
            for your design needs.</p>
        <div class="card-area">
            <div class="div1">
                <img src="../public/graphicImg.svg" alt="graphicImg"/>
                <p>Graphic Design</p>
            </div>
            <div class="div2">
                <img src="../public/uiuxImg.svg" alt="uiuxImg"/>
                <p>UI/UX</p>
            </div>
            <div class="div3">
                <img src="../public/appsImg.svg" alt="apps"/>
                <p>Apps</p>
            </div>
            <div class="div4">
                <img src="../public/illustrationsImg.svg" alt="Illustrations"/>
            </div>
            <div class="div5">
                <img src="../public/photoImg.svg" alt="photoImg"/>
                <p>Photography</p>
            </div>
            <div class="div6">
                <img src="../public/motionImg.svg" alt="motionImg"/>
                <p>Motion Graphicsƒ</p>
            </div>
        </div>
        </div>
  )
}
