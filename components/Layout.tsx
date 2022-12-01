import { ReactNode } from 'react'
import styles from '../styles/Layout.module.css'
import { Badge } from './Badge'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <div className={styles.Wrapper}>
      <Header />
      <main className={styles.Container}>{children}</main>
      <Footer />
      <Badge />
    </div>
  )
}
