import React from 'react';
import Main from './Components/Main';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



import './App.css';





function App() {
  return (
    <div className="container">

      <header>

        <div className="menu-icons open">
          <i className="fa fa-bars"></i>
        </div>

        <ul className="nav-list">

          <div className="menu-icons close">
            <i className="fa fa-close"></i>
          </div>

          <li className="nav-item">
            <a href="/home" className="nav-link current">Home</a>
          </li>
          <li className="nav-item">
            <a href="#experie" className="nav-link">About</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Projects</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">Contact</a>
          </li>
        </ul>

    </header>

    <main>

      <section className="hero">
        <div class="container">
          <div className="main-message">
            <h3>Theo Wright</h3>
            <h2>Junior Developer</h2>
            <p>Hi, thanks for looking, here's a bit about me..</p>
            <p>I love to solve problems and apply myself to challenging tasks,</p>
            <p>I have experience of Full Stack Development, but for now will be focussing on the front end, to develop my skills further</p>
            <div className="cta">
              <a href="#" class="btn">This link</a>
            </div>
          </div>

        </div>

      </section>

      <section className="experience" id="experience">

        <div className="container">

          <div className="title-heading">
            <h3>Experience</h3>
            <h1>The thrilling outdoors</h1>
            <p>lorornnvsnv lorornnvsnvlorornnvsnv</p>
          </div>



          <div className="activities-grid">

            <div className="activities-grid-item star-gazing">
                <i className=" fa fa-star"></i>
                <h1>Star Gazing</h1>
                <p>lorornnvsnv lorornnvsnvlorornnvsnv</p>
            </div>

            <div className="activities-grid-item hiking">
                <i className=" fa fa-compass"></i>
                <h1>Hiking</h1>
                <p>lorornnvsnv lorornnvsnvlorornnvsnv</p>
            </div>

            <div className="activities-grid-item camping">
                <i className=" fa fa-fire"></i>
                <h1>Camping</h1>
                <p>lorornnvsnv lorornnvsnvlorornnvsnv</p>
            </div>

          </div>
        </div>
      </section>

      <section className="begin-adventure">
        <div className="container">
          <div className="title-heading">
            <h3>Let the</h3>
            <h1>Adventures begin</h1>
            <p>lorem ipsum wajfef fdds</p>
          </div>
          <div className="adventure-grid">

            <div className="adventure-grid-item">
              <p>
                llorem ipsum wajfef fddslorem ipsum wajfef fddslorem ipsum wajfef fddslorem ipsum wajfef fddslorem ipsum wajfef fdds
              </p>
            </div>
            <div className="adventure-grid-item">
              <p>
                llorem ipsum wajfef fddslorem ipsum wajfef fddslorem ipsum wajfef fddslorem ipsum wajfef fddslorem ipsum wajfef fdds
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <p>&copy; 2019 outdoors</p>
    </footer>



    </div>
//


  );
}

export default App;


// <Navigation>
//              <Link to="/">About</Link>
//              <Link to="/projects">Projects</Link>
//              <Link to="/contact">Contact</Link>
//
// </Navigation>




// <div style={{height: '100vh', position: 'relative'}}>
//     <Layout >
//       <Header className="header-colour"  style={{color: 'white'}}
//         >
//       <Grid>
//         <Cell col={8}>
//
//             <Navigation>
//                 <Link to="/">About</Link>
//                 <Link to="/projects">Projects</Link>
//                 <Link to="/contact">Contact</Link>
//
//             </Navigation>
//
//         </Cell>
//       </Grid>
//
//
//
//
//
//
//               </Header>
//
//
//
//         <Content>
//           <div className="page-content" >
//              <Main />
//           </div>
//         </Content>
//     </Layout>
// </div>



// <div className="social_links">
//   <Grid>
//     <Cell col={4}>
//
//       <a href="https://www.linkedin.com/in/theo-wright/"
//         target="_blank"
//         rel="noopener noreferrer"
//         >
//           <i className="fa fa-linkedin-square" aria-hidden="false" />
//       </a>
//
//       <a href="https://github.com/theowright2017"
//         target="_blank"
//         rel="noopener noreferrer"
//         >
//           <i className="fa fa-github-square" aria-hidden="false" />
//       </a>
