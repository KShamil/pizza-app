import { FC, ReactElement } from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./Layout.module.css";

interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({}): ReactElement => {
  return (
    <main className={styles["layout"]}>
      <div className={styles["sidebar"]}>
        <div className={styles["menu"]}>
          <Link to="/" className={styles["link"]}>
            Меню
          </Link>
          <Link to="/cart" className={styles["link"]}>
            Корзина
          </Link>
        </div>
      </div>
      <div className={styles["content"]}>
        <Outlet />
      </div>
    </main>
  );
};
