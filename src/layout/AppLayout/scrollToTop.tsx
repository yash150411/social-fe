import { ScrollToTopWrapper } from './style';
import { UpOutlined } from '@ant-design/icons';

export default function ScrollToTop() {
  const onScroll = () => {
    document.getElementById('scroll-to-top')?.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ScrollToTopWrapper onClick={() => onScroll()}>
      <UpOutlined />
    </ScrollToTopWrapper>
  );
}
