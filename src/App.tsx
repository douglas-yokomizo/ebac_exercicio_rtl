import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhttp2.mlstatic.com%2FD_NQ_NP_2X_883415-MLB45229176604_032021-F.jpg&f=1&nofb=1&ipt=4cebd3b906c80e3561fc1702bce869c2e13341984156be056c00c912547368cf&ipo=images">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>
    </div>
  );
}

export default App;
