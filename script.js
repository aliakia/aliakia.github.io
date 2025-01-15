const { gsap } = window;

gsap.timeline().set(".projects", {autoAlpha: 1 })
    .from(".title", {
        delay: 1,
        duration: 0.85,
        stagger: 0.095,
        skewY:gsap.utils.wrap([-8, 8]),
        ease: "expo.out",
    })
    .set(".projects", { pointerEvents: "all" });

gsap.defaults({
    duration: 0.55,
    ease: "expo.out",
});

const projectItems = document.querySelectorAll(".project");

projectItems.forEach((item) => {
    const imgWrapper = item.querySelector(".img");
    const imgWrapperBounds = imgWrapper.getBoundingClientRect();
    let  itemBounds = item.getBoundingClientRect();

    const onMouseEnter = () => {
        gsap.set(imgWrapper, {
            scale: 0.8,
        });
        gsap.to(imgWrapper, { opacity: 1, scale: 1});
    };

    const onMouseLeave = () => {
        gsap.to(imgWrapper, {
            opacity: 0,
            scale: 0.2,
        }); 
    };

    const onMouseMove = ({x, y}) => {
        let yOffset = itemBounds.top / imgWrapperBounds.height;
        yOffset = gsap.utils.mapRange(0, 1.5, -150, 150, yOffset);
        gsap.to(imgWrapper, {
            duration: 1.25,
        });
    };

    item.addEventListener("mouseenter", onMouseEnter);
    item.addEventListener("mouseleave", onMouseLeave);
    item.addEventListener("mousemove", onMouseMove);
});
