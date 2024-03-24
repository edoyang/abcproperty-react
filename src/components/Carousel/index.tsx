import { useState, useEffect, useRef } from 'react';
import './style.scss'

const Carousel = () => {
    const [activeIndicators, setActiveIndicators] = useState<number[]>([0]);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollStartX, setScrollStartX] = useState(0);

    const onDragStart = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setScrollStartX(carouselRef.current?.scrollLeft || 0);
        e.preventDefault();
    };

    const onDragMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!isDragging) return;
        e.preventDefault();
        const currentX = e.clientX;
        const dx = currentX - startX;
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = scrollStartX - dx;
        }
    };

    const onDragEnd = () => {
        setIsDragging(false);
    };

    const scrollAmount = (350 + 30) * 4;

    const checkScrollButtons = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        checkScrollButtons();
        const carousel = carouselRef.current;
        carousel?.addEventListener('scroll', checkScrollButtons);

        return () => {
            carousel?.removeEventListener('scroll', checkScrollButtons);
        };
    }, []);

    useEffect(() => {
        const calculateActiveIndicators = () => {
            if (carouselRef.current) {
                const scrollPosition = carouselRef.current.scrollLeft;
                const cardWidth = 350 + 30;
                const threshold = cardWidth * 5;
                const currentActive = Math.floor(scrollPosition / threshold);
                const newActiveIndicators = Array.from(new Set([0, ...Array.from({ length: currentActive + 1 }, (_, i) => i)]));
                setActiveIndicators(newActiveIndicators);
            }
        };

        const carousel = carouselRef.current;
        carousel?.addEventListener('scroll', calculateActiveIndicators);

        return () => {
            carousel?.removeEventListener('scroll', calculateActiveIndicators);
        };
    }, []);

  return (

    <>
    <div className="indicator">
                <div className="indicator-bar">
                {[0, 1, 2, 3].map((index) => (
                        <span key={index} className={activeIndicators.includes(index) ? 'active' : ''}></span>
                    ))}
                </div>
                <div className="buttons">
                <button className={`left-arrow ${!canScrollLeft ? 'disabled' : ''}`} onClick={scrollLeft} disabled={!canScrollLeft}>
                    <img src="right-arrow.svg" alt="" />
                </button>

                <button className={`right-arrow ${!canScrollRight ? 'disabled' : ''}`} onClick={scrollRight} disabled={!canScrollRight}>
                    <img src="right-arrow.svg" alt="" />
                </button>
            </div>

            </div>

            <div className="carousel" ref={carouselRef}
                onMouseDown={onDragStart}
                onMouseMove={onDragMove}
                onMouseLeave={onDragEnd}
                onMouseUp={onDragEnd}
                onTouchStart={(e) => onDragStart(e.changedTouches[0] as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>)}
                onTouchMove={(e) => onDragMove(e.changedTouches[0] as unknown as React.MouseEvent<HTMLDivElement, MouseEvent>)}
                onTouchEnd={onDragEnd}>
                <div className="container">
                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy1.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy2.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy3.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy4.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy1.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>
                    
                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy1.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy2.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy3.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy4.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy1.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>
                    
                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy1.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy2.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy3.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy4.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy1.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>
                    
                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy1.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy2.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy3.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy4.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                    <div className='property-card'>
                        <div className="card-image">
                            <img src="dummy1.png" alt="property" />
                        </div>
                        <h2 className="title">Large 4-room apartment with a beautiful terrace</h2>
                        <div className="description">
                            <p className="price">320 000€</p>
                            <p className="location">Barcelona IX. </p>
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

export default Carousel