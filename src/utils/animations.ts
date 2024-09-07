import gsap from 'gsap';

export const h1Animation = (target: HTMLElement | HTMLElement[], duration: number) => {
    return gsap.from(target, {
        duration: duration,
        autoAlpha: 0
    });
}

export const h2Animation = (target: HTMLElement | HTMLElement[], duration: number) => {
    return gsap.fromTo(target, {
        y: -15,
        autoAlpha: 0
    }, {
        duration: duration,
        y: 0,
        autoAlpha: 1
    });
}

export const imageAnimation = (target: HTMLElement, duration: number) => {
    const q = gsap.utils.selector(target);
    const overlay = q('.overlay') as HTMLElement[];
    const image = q('img') as HTMLElement[];
    const timeline = gsap.timeline();

    timeline
        .fromTo(overlay, {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }, {
            duration: duration,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        })
        .to(overlay, {
            duration: duration,
            left: "100%"
        })
        .fromTo(image, {
            clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
        }, {
            duration: duration,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
        }, duration);

    return timeline;
}

export const articlesAnimation = (target: HTMLElement | HTMLElement[], duration: number, stagger: number) => {
    return gsap.fromTo(target, {
        autoAlpha: 0
    }, {
        duration: duration,
        autoAlpha: 1,
        stagger: stagger
    });
}
