import Image from "next/image"
import Logo from "../../../public/assets/images/logo_1.png"

import styles from "./page.module.css";
import ActionButton from "@/components/action_button";


export default function Home() {
  return (
    <header className={styles["banner__container"]}>
      <div className={styles["banner__content"]}>
        <Image className="logo" src={Logo} width={200} height={200} alt="Restaurant Logo" />
        <ActionButton className={styles["banner__action"]}
          text="Explore menu"
          href={`/#categories`}
        />
      </div>
    </header>
  );
}
