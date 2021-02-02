import logo from './logo.svg';
import './App.css';
import TopMenu from './Component/top-menu/TopMenu';
import Header from './Component/header/Header';
import Content from './Component/content/Content';
import Footer from './Component/footer/Footer';

function App() {
  return (
    <div className="App">
      <TopMenu></TopMenu>
      <Header></Header>
      <Content tieude = "props 1" vitri = "order-lg-2" anh = "img/01.jpg"></Content>
      <Content tieude = "props 2" anh = "img/02.jpg"></Content>
      <Content tieude = "props 3" vitri = "order-lg-2" anh = "img/03.jpg"></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
