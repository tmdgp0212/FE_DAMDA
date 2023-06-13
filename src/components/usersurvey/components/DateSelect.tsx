import React, { useState } from 'react';
import { UserSurveyDateProps } from '@/types/components/form';
import { UserSurveyFormDateWrapper } from '@/styles/survey.styled';
import ko from 'date-fns/locale/ko';
import { CaptionProps, DayOfWeek, DayPicker, useNavigation } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { AiOutlineLeft, AiOutlineRight, AiOutlineUp } from 'react-icons/ai';
import { format } from 'date-fns';
import { motion, Variants } from 'framer-motion';

const dayOfWeekMatcher: DayOfWeek = {
  dayOfWeek: [6, 0],
};

const variants: Variants = {
  hover: {
    backgroundColor: '#0061FF',
    color: '#fff',
  },
};

const timeCategory = ['오전 8시', '오전 9시', '', '오후 1시', '오후 2시', '오후 3시'];
function CustomCaption(props: CaptionProps) {
  const { goToMonth, nextMonth, previousMonth } = useNavigation();
  return (
    <h2 className="caption">
      <div onClick={() => previousMonth && goToMonth(previousMonth)}>
        <AiOutlineLeft />
      </div>
      <span>{format(props.displayMonth, 'M월')}</span>
      <div onClick={() => nextMonth && goToMonth(nextMonth)}>
        <AiOutlineRight />
      </div>
    </h2>
  );
}

function DateSelect({ title, placeholder }: UserSurveyDateProps) {
  const [isDayOpen, setIsDayOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(undefined);

  const handleDayClick = (day: Date) => {
    setIsDayOpen(false);
    setSelectedDay(day);
  };

  return (
    <UserSurveyFormDateWrapper>
      <div className="title">{title}</div>
      <div className="select-body" onClick={() => setIsDayOpen(!isDayOpen)}>
        <span>
          {selectedDay
            ? format(selectedDay, 'yyyy년 MM월 dd일 (ccc) ', { locale: ko })
            : '서비스 날짜를 선택해 주세요.'}
        </span>
        <AiOutlineUp />
      </div>
      {isDayOpen && (
        <DayPicker
          locale={ko}
          weekStartsOn={0}
          selected={selectedDay}
          hideHead
          modifiers={{ dayOfWeekMatcher }}
          onDayClick={(day) => handleDayClick(day)}
          components={{
            Caption: CustomCaption,
          }}
          modifiersClassNames={{ dayOfWeekMatcher: 'dayOfWeekMatcher' }}
        />
      )}
      <div className="select-wrapper">
        <span>시작하고 싶은 시간을 선택해주세요.</span>
        <div className="select-list">
          {timeCategory.map((time) => (
            <motion.span className="select-item" key={time} whileHover="hover" variants={variants}>
              {time}
            </motion.span>
          ))}
        </div>
      </div>
    </UserSurveyFormDateWrapper>
  );
}

export default DateSelect;
