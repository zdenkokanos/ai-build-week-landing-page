export function Partners() {
  return (
    <section className="shell section-partners" aria-label="Partneri">
      <div className="partners">
        <span className="partners__label">Nakupujeme za teba u:</span>
        <div className="partners__logos">
          <span className="partners__logo partners__logo--wolt">
            <img src="/assets/wolt.png" alt="Wolt" loading="lazy" width={320} height={320} />
          </span>
          <span className="partners__logo partners__logo--bolt">
            <img src="/assets/bolt.png" alt="Bolt Food" loading="lazy" width={960} height={559} />
          </span>
          <span className="partners__logo partners__logo--kosik">
            <img src="/assets/kosik.png" alt="Košík" loading="lazy" width={630} height={354} />
          </span>
          <span className="partners__more">ďalšie pribúdajú</span>
        </div>
      </div>
    </section>
  )
}
