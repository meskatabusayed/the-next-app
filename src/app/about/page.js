import styles from "./About.module.css"
export const metadata = {
  title : "About Page",
  description : "this is about page"

}
const aboutPage = () => {
  return (
    <div>
      <h1 className={styles.heading}>This is About Page/route</h1>
    </div>
  )
}

export default aboutPage;
