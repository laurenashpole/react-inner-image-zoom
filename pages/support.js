import Layout from '../components/Layout';
import styles from './Support.module.css';

const Support = () => {
  return (
    <Layout title="Support">
      <div className={styles.container}>
        <h2 className={styles.heading}>Support</h2>

        <div className={styles.content}>
          <p>If you run into any bugs I missed during my testing or if I left out any feature that would come in handy, please let me know!</p>

          <p>Most of the implementation choices for this component are based on use cases I've encountered in the past. For example, I chose click to zoom as the default because it's been the most requested on product detail pages I've worked on. If there's a demand for additional triggers or other functionality, I'd be open to looking into it so feel free to ask. And if you want to talk through ideas first, check out the <a href="https://github.com/laurenashpole/react-inner-image-zoom/discussions">discussions page</a>.</p>

          <p>If you're interested in contributing, check out the guidelines <a href="https://github.com/laurenashpole/react-inner-image-zoom/blob/master/CONTRIBUTING.md">here</a>.</p>

          <div>
            <a href="https://github.com/laurenashpole/react-inner-image-zoom/issues" className={styles.btn}>
              Submit an issue <span>on Github</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
