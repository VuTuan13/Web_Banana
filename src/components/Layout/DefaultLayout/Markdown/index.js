import classNames from "classnames/bind";
import styles from './Markdown.module.scss'
import ReactMarkdown from 'react-markdown';

const cx = classNames.bind(styles);

const content = `

## 1. Tổng quan về BlackBox AI

### a. BlackBox AI là gì

BlackBox AI là một trợ lý trí tuệ nhân tạo dành cho các nhà phát triển được tạo ra bởi Anthropic vào năm 2019. Đây là một công cụ đang trong *quá trình phát triển* được thiết kế để tối ưu hóa quá trình lập trình và tăng cường năng suất.

Như tên gọi của nó BlackBox, đây là một model AI dạng hộp đen. Tức là người dùng chỉ cần đưa đầu vào (Input) và nhận được đầu ra (Output), mà không thể hiểu được cách model hoạt động hay hiệu chỉnh các tham số của model.

### b. Đặc điểm nổi bật

Dựa trên SaaS (Software as a Service) platform, công cụ được lưu trữ trên đám mây và được truy cập qua internet, thay vì được cài đặt trên các máy tính hoặc máy chủ riêng lẻ. Nền tảng SaaS cung cấp nhiều dịch vụ, chẳng hạn như quản lý quan hệ khách hàng, quản lý dự án và các công cụ cộng tác, đồng thời thường dựa trên đăng ký, cho phép người dùng truy cập phần mềm trên cơ sở trả tiền theo mức sử dụng.

Công cụ hỗ trợ hơn 20 ngôn ngữ lập trình bao gồm JavaScript, Python, Java, C++ và nhiều ngôn ngữ khác. Nó phù hợp nhất đối với người dùng cá nhân và doanh nghiệp nhỏ. [Nguồn ảnh](https://appscribed.com)


Trong bài đánh giá HumanEval (Python code completion task), *BlackBox AI* cho thấy khả năng mạnh mẽ, vượt qua tất cả các mô hình khác bao gồm cả Open AI-GPT4, GPT-3.5 & Anthropic-Claude-2. [Nguồn ảnh](https://www.blackbox.ai)


## 2. Tính năng chính

- **Real-Time Knowledge**
  
*BlackBox* có kiến thức thời gian thực về thế giới, giúp nó có thể trả lời câu hỏi về các sự kiện gần đây, các đột phá công nghệ, việc phát hành sản phẩm, tài liệu API và nhiều hơn thế nữa.

- **Code Completion**

*BlackBox* tích hợp trực tiếp với VSCode để tự động đề xuất các dòng mã tiếp theo dựa trên ngữ cảnh của kho lưu trữ.

- **Vision**

*BlackBox Vision* cho phép người dùng chỉ dẫn *BlackBox* phân tích đầu vào hình ảnh, ví dụ như ảnh chụp màn hình mã hoặc phác thảo sản phẩm.

- **Code Commenting**

*BlackBox* sẽ viết đúng bình luận cho các tệp mã, bao gồm một vài dòng mã hoặc cả hàng trăm dòng mã và hoạt động cho tất cả các ngôn ngữ lập trình.

- **Commit Message Generation**

*Blackbox* sẽ viết một thông điệp commit phù hợp cho các thay đổi mà người dùng đã thực hiện trong các tệp repo của mình.

## 3. Ưu nhược điểm

### a. Ưu điểm

- **Productivity Gains**
  
*BlackBox* tiết kiệm cho lập trình viên hàng giờ thông qua tính năng dự đoán tự động, tạo mã chính xác và tích hợp IDE mượt mà.

- **Code Quality**
  
Đối với các nhiệm vụ đơn giản như gọi API và phân tích CSV, mã được tạo ra hoạt động hoàn hảo mà không cần chỉnh sửa gì.

- **Cloud Infrastructure Access**
  
Môi trường phát triển đám mây được thiết lập trước giúp tối ưu hóa các trường hợp sử dụng nguyên mẫu mà không cần phải cấu hình các ngăn xếp một cách thủ công.

### b. Nhược điểm

Trên Product Hunt, một số người dùng đặt ra lo ngại về việc sản phẩm yêu cầu quyền truy cập đọc và ghi đầy đủ vào máy tính cục bộ, và nghi ngờ về loại dịch vụ đang được cung cấp do các tính năng còn hạn chế so với quảng cáo. [Nguồn](BLACKBOX%20Reviews%20-%20Pros%20&%20Cons%202023%20|%20Product%20Hunt)

## 4. So sánh giá thành

*BlackBox* được đánh giá là công cụ tiết kiệm nhất cho người dùng cá nhân, cung cấp các gói giá cả phải chăng dựa trên nhu cầu sử dụng:


Đối với *ChatGPT4*, bạn phải trả 20 đô / tháng, với model có thể tùy chỉnh.


Đối với *GitHub Copilot*, model đang được đánh giá mạnh nhất hiện nay, nhưng chỉ có thể truy xuất code từ dữ liệu được cho vào chứ không thể tạo sinh code:


Tuy nhiên, vì đây là công cụ đang trong quá trình phát triển nên không thể so sánh được với những người anh trưởng thành như *ChatGPT* và *GitHub Copilot*. Nếu bạn chỉ muốn một công cụ hỗ trợ cho việc code một cách nhanh chóng và chính xác, hãy chọn *BlackBox AI*.


`

function Content() {
    return ( 
        <div className={cx('content')}>
            <h1 className={cx('heading')}>BlackBox AI - Tool for improving coding style</h1>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
     );
}

export default Content;