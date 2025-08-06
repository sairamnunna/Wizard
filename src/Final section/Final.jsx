import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Final.module.css";

gsap.registerPlugin(ScrollTrigger);

const Final = () => {
  const refs = {
    trigger1: useRef(null),
    trigger2: useRef(null),
    trigger3: useRef(null),
    trigger4: useRef(null),
    trigger5: useRef(null),
  };

  const elements = {
    element1Ref: useRef(null),
    elementBlack1Ref: useRef(null),
    elementBlack2Ref: useRef(null),
    element2Ref: useRef(null),
    element3Ref: useRef(null),
    elementBlack3Ref: useRef(null),
    elementBlack4Ref: useRef(null),
    element4Ref: useRef(null),
  };

  useEffect(() => {
    gsap.timeline({
      scrollTrigger: {
        trigger: refs.trigger1.current,
        start: "top 60%",
        end: "top 40%",
        scrub: true,
      },
    })
      .fromTo(`.${styles.lefttopcontainer} h3`, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
      .fromTo(`.${styles.lefttopcontainer} p`, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

    gsap.timeline({
      scrollTrigger: {
        trigger: refs.trigger2.current,
        start: "top 65%",
        end: "top 40%",
        scrub: true,
      },
    })
      .fromTo(elements.element1Ref.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
      .fromTo(elements.elementBlack1Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

    gsap.timeline({
      scrollTrigger: {
        trigger: refs.trigger3.current,
        start: "top 65%",
        end: "top 40%",
        scrub: true,
      },
    })
      .fromTo(elements.elementBlack2Ref.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
      .fromTo(elements.element2Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

    gsap.timeline({
      scrollTrigger: {
        trigger: refs.trigger4.current,
        start: "top 65%",
        end: "top 40%",
        scrub: true,
      },
    })
      .fromTo(elements.element3Ref.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
      .fromTo(elements.elementBlack3Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });

    gsap.timeline({
      scrollTrigger: {
        trigger: refs.trigger5.current,
        start: "top 65%",
        end: "top 40%",
        scrub: true,
      },
    })
      .fromTo(elements.elementBlack4Ref.current, { x: -200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 })
      .fromTo(elements.element4Ref.current, { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1 });
  }, []);

  return (
    <div className={styles.mainsection}>
      <div className={styles.topcontainer} ref={refs.trigger1}>
        <div className={styles.lefttopcontainer}>
          <h3>Services</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
            nobis obcaecati beatae error unde nostrum distinctio atque labore
            fugit dolor.
          </p>
        </div>
        <div className={styles.rightoptcontainer}></div>
      </div>

      <div className={styles.leftcontainer}>
        <div ref={refs.trigger2} className={styles.pairContainer}>
          <div className={styles.element1} ref={elements.element1Ref}>
            <div className={styles.elem1}>
              <h2>Search engine optimization</h2>
              <h4><i className="ri-arrow-right-up-line"></i>Learn more</h4>
            </div>
            <div className={styles.elem2}>
              <img src="https://awaaz-frontend.vercel.app/assets/Mic-BF4SCayK.png" alt="" />
            </div>
          </div>
          <div className={styles.elementblack1} ref={elements.elementBlack1Ref}>
            <div className={styles.elem1black}>
              <h2>Pay per click advertisement</h2>
              <h4><i className="ri-arrow-right-up-line"></i>Learn more</h4>
            </div>
            <div className={styles.elem2black}>
              <img src="https://awaaz-frontend.vercel.app/assets/Mic-BF4SCayK.png" alt="" />
            </div>
          </div>
        </div>
        <div ref={refs.trigger3} className={styles.pairContainer}>
          <div className={styles.elementblack2} ref={elements.elementBlack2Ref}>
            <div className={styles.elem1black}>
              <h2>Social media marketing</h2>
              <h4><i className="ri-arrow-right-up-line"></i>Learn more</h4>
            </div>
            <div className={styles.elem2black}>
              <img src="https://awaaz-frontend.vercel.app/assets/Mic-BF4SCayK.png" alt="" />
            </div>
          </div>
          <div className={styles.element2} ref={elements.element2Ref}>
            <div className={styles.elem1}>
              <h2>E-mail marketing</h2>
              <h4><i className="ri-arrow-right-up-line"></i>Learn more</h4>
            </div>
            <div className={styles.elem2}>
              <img src="https://awaaz-frontend.vercel.app/assets/Mic-BF4SCayK.png" alt="" />
            </div>
          </div>
        </div>
        <div ref={refs.trigger4} className={styles.pairContainer}>
          <div className={styles.element3} ref={elements.element3Ref}>
            <div className={styles.elem1}>
              <h2>Search engine optimization</h2>
              <h4><i className="ri-arrow-right-up-line"></i>Learn more</h4>
            </div>
            <div className={styles.elem2}>
              <img src="https://awaaz-frontend.vercel.app/assets/Mic-BF4SCayK.png" alt="" />
            </div>
          </div>
          <div className={styles.elementblack3} ref={elements.elementBlack3Ref}>
            <div className={styles.elem1black}>
              <h2>Pay per click advertisement</h2>
              <h4><i className="ri-arrow-right-up-line"></i>Learn more</h4>
            </div>
            <div className={styles.elem2black}>
              <img src="https://awaaz-frontend.vercel.app/assets/Mic-BF4SCayK.png" alt="" />
            </div>
          </div>
        </div>

        <div ref={refs.trigger5} className={styles.pairContainer}>
          <div className={styles.elementblack4} ref={elements.elementBlack4Ref}>
            <div className={styles.elem1black}>
              <h2>Social media marketing</h2>
              <h4><i className="ri-arrow-right-up-line"></i>Learn more</h4>
            </div>
            <div className={styles.elem2black}>
              <img src="https://awaaz-frontend.vercel.app/assets/Mic-BF4SCayK.png" alt="" />
            </div>
          </div>
          <div className={styles.element4} ref={elements.element4Ref}>
            <div className={styles.elem1}>
              <h2>E-mail marketing</h2>
              <h4><i className="ri-arrow-right-up-line"></i>Learn more</h4>
            </div>
            <div className={styles.elem2}>
              <img src="https://awaaz-frontend.vercel.app/assets/Mic-BF4SCayK.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
