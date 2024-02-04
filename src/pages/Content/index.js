import classNames from 'classnames/bind';
import styles from './Content.module.scss'
import Category from "~/components/Popper/Category";
import Markdown from '~/components/Layout/DefaultLayout/Markdown';
import Question from '~/components/Popper/Question';

const cx = classNames.bind(styles);
function Content() {
        const categories = [
          {
            name: '1. AI',
            items: ['Nội dung 1', 'Nội dung 2', 'Nội dung 3', 'Nội dung 4'],
          },
          {
            name: '2. Web',
            items: ['Nội dung 1', 'Nội dung 2', 'Nội dung 3', 'Nội dung 4'],
          },
          {
            name: '3. Cloud',
            items: ['Nội dung 1', 'Nội dung 2', 'Nội dung 3', 'Nội dung 4'],
          },
          {
            name: '4. Mobile',
            items: ['Nội dung 1', 'Nội dung 2', 'Nội dung 3', 'Nội dung 4'],
          },
        ];

        const list = [
            {
              name: '1. Tổng quan về BlackBox AI',
              items: ['BlackBoxAI là gì?', 'Đặc điểm nổi bật'],
            },
            {
              name: '2. Tính năng chính',
              items: ['Real-Time Knowledge', 'Code Completion', 'Vision', 'Code Commenting', 'Commit Message Generation'],
            },
            {
              name: '3. Ưu nhược điểm',
              items: ['Ưu điểm', 'Nhược điểm'],
            },
            {
              name: '4. So sánh giá thành',
              items: [],
            },
          ];
      
        return (
        <div className={cx('wrapper')}>
            <div className={cx('category')}>
                <h2>Categories</h2>
                {categories.map((category, index) => (
                <Category key={index} name={category.name} items={category.items} />
                ))}
            </div>
            <div className={cx('content')}>
                <Markdown />
                <div className={cx('question')}>
                  <Question/>
                </div>
            </div>
            <div className={cx('list')}>
                <h2>Danh mục</h2>
                    {list.map((category, index) => (
                    <Category key={index} name={category.name} items={category.items} />
                    ))}
            </div>
        </div>
        );
      };

export default Content;