import type { ActorRes } from "@/common/types"
import { getImageUrl } from "@/common/utils"
import styles from "./SectionActors.module.css"

interface Props {
  actors: ActorRes[] | null
  title: string
}

export function SectionActors({ actors, title }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
      </div>
      <div className={styles.grid}>
        {actors &&
          actors.slice(0, 6).map(actor => (
            <article key={actor.id} className={styles.card}>
              <div className={styles.avatarFrame}>
                <img
                  className={styles.avatar}
                  src={getImageUrl(actor.profile_path, "card")}
                  alt=""
                  loading="lazy"
                />
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{actor.name}</p>
                <p className={styles.character}>{actor.character}</p>
              </div>
            </article>
          ))}
      </div>
    </section>
  )
}
