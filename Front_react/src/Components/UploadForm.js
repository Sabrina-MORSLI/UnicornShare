import React from 'react';
import '../Styles/UploadForm.css';
import logo from '../assets/logo.svg';

class UploadForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: '',
    };

    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    
    fetch('http://localhost:5000/upload', {
      method: 'POST',
      body: data,
    }).then((response) => {
      response.json().then((body) => {
        this.setState({ imageURL: `http://localhost:5000/${body.file}` });
      });
      console.log(data)
      console.log(this.setState)
    });
  }

  render() {
    return (
      <>
      <div className="header">
          <img className="logoModale" src={logo} alt="logo"/>
          <button className="closeButton">X</button>
      </div>   
      <h1>Télécharger une photographie</h1>
      <form className="my-form" onSubmit={this.handleUploadImage}>
        <div className="container">
          <ul>
            <li>
              <div className="grid grid-2">
                <label className="inputPosition">
                TITRE
                  <input ClassName="backgroundInput" type="text" name="title" />
                </label>
                <label className="inputPosition">
                NOM
                  <input ClassName="backgroundInput" type="text" name="name" />
                </label>
              </div></li>    
            <li>
              <div>
                <label className="inputPosition">CATEGORIE</label>
                <select ClassName="backgroundInput">
                  <option selected value="categorie">--Choisir une catégorie--</option>
                  <option value="animal">Animaux</option>
                  <option value="landscape">Paysages</option>
                  <option  value="food">Nourriture</option>
                </select>
              </div>
            </li>    
            <li>
              <div>
                <label className="inputPosition">
                  COMMENTAIRE
                  <textarea ClassName="backgroundInput">
                    Veuillez insérer votre commentaire
                  </textarea>
                </label>
              </div>
            </li>    
            <li>
              <div>
                <input ClassName="backgroundInput" ref={(ref) => { this.uploadInput = ref; }} type="file" />
              </div>
            </li>
            <li>
              <div>
                <button>Valider</button>
              </div>
            </li>
            <li>
              <div>
                <img src={this.state.imageURL} alt="img" />
              </div>
            </li>
          </ul>
        </div>  
      </form>
      
      </>
    );
  }
}

export default UploadForm;