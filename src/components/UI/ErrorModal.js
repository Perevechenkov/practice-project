import styles from './ErrorModal.module.scss';
import Card from './Card';
import Button from './Button';

export default function ErrorModal(props) {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button>Close</Button>
        </footer>
      </Card>
    </div>
  );
}
