import './App.css';
import PostForm from './components/PostForm';
import PostsList from './components/PostsList';

const App = () => (
    <div className="night-mode">
      <PostForm></PostForm>
      <PostsList/>
    </div>
  );

export default App;
