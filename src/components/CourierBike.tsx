/* Hand-drawn courier: same pen as the doodle layer, just a longer line.
   Wheelbase is ~1.6× the wheel diameter, as on a real bike — stretched any
   wider the sketch stops reading as a bicycle.
   Decorative only — aria-hidden, so it never lands in the reading order. */
export function CourierBike() {
  return (
    <div className="courier" aria-hidden="true">
      <svg className="sketch" viewBox="0 0 210 180" role="presentation">
        {/* speed lines */}
        <path className="thin" d="M10 88h22M2 106h18M18 70h16" />

        {/* wheels */}
        <circle cx="66" cy="132" r="34" />
        <circle cx="176" cy="132" r="34" />
        <path className="thin" d="M66 132V98M66 132l30 17M66 132l-30 17" />
        <path className="thin" d="M176 132V98M176 132l30 17M176 132l-30 17" />

        {/* frame */}
        <path d="M66 132h52M118 138L96 84M66 132l30-48M118 138l34-58M96 84h56M152 80l24 52" />
        {/* saddle, bars, crank */}
        <path d="M87 82q10-5 18-1" />
        <path d="M152 80l10-12" />
        <path d="M118 138l10 8" />

        {/* rider — hips on the saddle, hands on the bars, feet on the pedals */}
        <path d="M100 76q12-18 30-28" />
        <path d="M130 48l6-7" />
        <circle cx="143" cy="33" r="10" />
        <path className="thin" d="M133 28q10-9 19-1" />
        <path className="thin" d="M152 26l12-3" />
        <path d="M130 48q18 10 34 22" />
        <path d="M100 76l24 22 4 44" />
        <path className="thin" d="M122 146l14-4" />
        <path className="thin" d="M100 76l22 18-12 32" />

        {/* basket of groceries on the bars */}
        <path className="lime" d="M164 62l36-4-5 26-26 2z" />
        <path d="M164 62l36-4-5 26-26 2z" />
        <path className="thin" d="M166 71l33-3M168 79l29-3" />
        {/* baguette, carrot tops, a round something */}
        <path d="M186 60l13-21" />
        <path className="thin" d="M190 52l4-6M194 45l4-6" />
        <path className="thin" d="M172 60l-5-17M176 59l1-17M180 59l7-15" />
        <path className="thin" d="M180 63q8-9 15-1" />

        {/* ground */}
        <path className="thin ground" d="M24 170h42M84 170h26M132 170h56" />
      </svg>
    </div>
  )
}
