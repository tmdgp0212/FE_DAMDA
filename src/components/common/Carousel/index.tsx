import * as React from 'react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import * as S from './style';
import { CarouselItem } from '@/components/common/Carousel/type';
import UserReview from '@/components/common/Carousel/UserReview';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    transition: {
      ease: 'easeOut',
      duration: 0.4,
    },
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.4,
      },
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

interface CarouselProps {
  carouselItems: CarouselItem[];
  height: number;
  width: number;
  isNextBySide?: boolean;
}

function Index({ carouselItems, isNextBySide, width, height }: CarouselProps) {
  const [[page, direction], setPage] = useState([0, 0]);
  const [seenItem, setSeenItem] = useState(carouselItems.slice(0, 2));

  const paginate = (newDirection: number) => {
    if (page === 0 && newDirection === -1) return;
    if (page === carouselItems.length - 1 && newDirection === 1) return;
    setPage([page + newDirection, newDirection]);
    setSeenItem(carouselItems.slice(page + newDirection, page + newDirection + 2));
  };

  return (
    <S.CarouselWrapper>
      <AnimatePresence initial={false} custom={direction}>
        <S.CarouselItemWrapper
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          {seenItem.map((carouselItem, index) =>
            index === 0 ? (
              <S.CarouselItem
                height={height}
                index={index}
                key={carouselItem.id}
                transition={{
                  ease: 'easeOut',
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);

                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
              >
                <UserReview carouselItems={carouselItem} />
              </S.CarouselItem>
            ) : (
              <S.CarouselItem height={height} index={index} key={carouselItem.id} isNextBySide={isNextBySide}>
                <UserReview carouselItems={carouselItem} />
              </S.CarouselItem>
            ),
          )}
        </S.CarouselItemWrapper>
      </AnimatePresence>
    </S.CarouselWrapper>
  );
}

export default Index;

//  <S.CarouselItemWrapper
//           key={page}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: 'spring', stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 },
//           }}
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           dragElastic={1}
//           onDragEnd={(e, { offset, velocity }) => {
//             const swipe = swipePower(offset.x, velocity.x);
//
//             if (swipe < -swipeConfidenceThreshold) {
//               paginate(1);
//             } else if (swipe > swipeConfidenceThreshold) {
//               paginate(-1);
//             }
//           }}
//         >
//           {carouselItems[itemIndex].p}
//         </S.CarouselItemWrapper>
