# Ôn thi Toán 12 – Giữa Học Kỳ 1 (2026–2027)

Web app ôn thi Toán 12 dựng bằng **React + Vite + TailwindCSS**, bám sát 4 đề thi Giữa HK1 thật (THPT Thăng Long, Linh Trung, Phan Đình Phùng, Phan Bội Châu) và 20 trang Đề cương.

## 1. Giao diện: 5 tab, một cột, tối giản

| Tab | Nội dung |
|---|---|
| **Trang chủ** | Chỉ 1 việc cần làm ngay (học tiếp / làm tiếp bài đang dở) + 3 lối vào lớn (Học – Luyện – Thi thử) + checklist "Hôm nay" + 3 con số tiến độ. |
| **Học** | Danh sách 10 dạng bài (bấm 1 lần là mở). Trong mỗi dạng có đúng 3 tab: **Lý thuyết – Bấm máy – Mẹo nhanh**. Tab *Bấm máy* hướng dẫn **cả 2 dòng máy: Casio fx-580VNX và Casio fx-880BTG**, kèm bảng tra nhanh đối chiếu 2 máy. Cuối trang là 2 nút "Đánh dấu đã hiểu" và "Làm bài tập dạng này". |
| **Luyện** | **10 bộ = 10 dạng, mỗi bộ đúng 40 câu** (tổng 400 câu): câu lấy từ 4 đề thật (nếu có) + ngân hàng luyện xếp từ cơ bản đến nâng cao. Mỗi bộ 1 dòng: số câu, thời gian, điểm cao nhất, nút Bắt đầu / Làm tiếp. |
| **Thi thử** | 5 đề Giữa HK1 90 phút (12 trắc nghiệm 3,0đ + 4 Đúng/Sai 4,0đ + 6 trả lời ngắn 3,0đ). |
| **Của tôi** | Tiến độ theo chương + 3 tab Lịch sử / Câu sai / Đã lưu + cài đặt (giao diện tối, xem dung lượng cookie, xóa dữ liệu). |

Luồng làm bài giữ đúng yêu cầu: chọn đáp án → **bấm "Nộp bài & xem lời giải"** mới hiện điểm, đúng/sai, **Cách giải** và **Bấm máy · mẹo nhanh**. Trong lúc làm, đáp án bị ẩn hoàn toàn; có đồng hồ, tạm dừng, gắn cờ, dải số câu để nhảy nhanh và tự lưu bản nháp.

Thiết kế: khung hẹp (768px) một cột, chữ 14–15px, mỗi màn hình chỉ một hành động chính, không banner, không tab lồng nhiều tầng. Có thanh điều hướng dưới cho điện thoại.

**Liên hệ & góp ý (dễ thấy):** nút **Góp ý** màu xanh nằm ngay trên thanh tiêu đề (mọi trang) và khung *Liên hệ & góp ý* ở cuối mỗi trang — gồm 2 nút lớn: **Zalo 0352 159 809** (bấm là mở chat Zalo) và **Facebook Hạ** (bấm là mở đúng trang Facebook của mình). Thông tin đặt tại `src/data/contactData.js`.

**Nút 💡 Gợi ý cách giải:** câu nào ở mức *khó / nâng cao* (level 3–4 trong ngân hàng câu hỏi) sẽ có nút 💡 ngay dưới đề bài; bấm vào chỉ hiện **hướng làm**, tuyệt đối không lộ đáp án — đáp án vẫn chỉ hiện sau khi nộp bài.

**Lưu tiến độ bằng cookie:** toàn bộ tiến độ (tab đang học, bài đang làm dở, lịch sử điểm, câu sai, câu đã lưu) được nén và lưu trong **cookie `toan12_progress_v1`** (hạn 2 năm, ~1,5–3,9 KB). Không dùng localStorage, không có API/server, không có nút tải JSON.

## 2. Chạy trên máy

```bash
npm install
npm run dev      # http://localhost:5173
npm run build        # xuất bản production vào thư mục docs/
npm run build:single # xuất thêm 1 tệp ../on-thi-toan12-single/index.html
```

Yêu cầu Node.js 18+ (khuyến nghị Node 20).

## 3. Đưa lên GitHub Pages

Repo đã cấu hình `base: './'` và build sẵn ra thư mục **`docs/`** (kèm `.nojekyll` và `404.html`), nên chỉ cần chọn 1 trong 3 cách sau.

### Cách A – Không cần GitHub Actions (nhanh nhất, ~2 phút)

1. Tạo repo mới trên GitHub rồi đẩy toàn bộ thư mục này lên (nhớ đẩy cả thư mục `docs/`):
   ```bash
   git init
   git add .
   git commit -m "On thi Toan 12 - Giua HK1 2026-2027"
   git branch -M main
   git remote add origin https://github.com/<tên-tài-khoản>/<tên-repo>.git
   git push -u origin main
   ```
   > Nếu chưa muốn đẩy source, chỉ cần đẩy thư mục `docs/` là đủ để web chạy.
2. Vào repo → **Settings** → **Pages** → mục *Build and deployment*:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` và thư mục **`/docs`** → **Save**.
3. Đợi ~1 phút, web có tại `https://<tên-tài-khoản>.github.io/<tên-repo>/`.

### Cách B – Tự động build bằng GitHub Actions

File `.github/workflows/deploy.yml` đã có sẵn. Chỉ cần:

1. Đẩy code lên nhánh `main`.
2. **Settings** → **Pages** → **Source:** `GitHub Actions`.
3. Mỗi lần `git push`, Actions tự build và deploy.

### Cách C – Chỉ cần upload **1 tệp duy nhất** (nhanh nhất, không cần hiểu repo)

Nếu GitHub khó dùng (không muốn upload cả thư mục `docs/` gồm 98 tệp), dùng bản **1 file** đã nhúng sẵn CSS, JS, font và 34 hình:

1. Lấy tệp `on-thi-toan12-single/index.html` (5,5 MB) — tạo lại bằng lệnh:
   ```bash
   npm install
   npm run build:single
   ```
2. Vào repo → **Add file** → **Upload files** → kéo tệp `index.html` vào → **Commit changes**.
3. **Settings** → **Pages** → *Source:* `Deploy from a branch`, *Branch:* `main`, thư mục **`/ (root)`** → **Save**.
4. ~1 phút sau web chạy tại `https://<tài-khoản>.github.io/<repo>/`.

> Tệp này cũng mở được bằng cách bấm đúp (file://), nhưng **nên chạy qua GitHub Pages** để tiến độ được lưu bằng cookie; khi mở bằng file:// trình duyệt chặn cookie nên app tự lưu dự phòng vào localStorage của trình duyệt.

### Lưu ý khi deploy
- Tên repo có dấu cách/tiếng Việt nên đổi thành không dấu (ví dụ `on-thi-toan-12`).
- Nếu deploy ở *project page* (`.../<repo>/`) thì đường dẫn tương đối `./assets/...` đã đúng; nếu deploy ở *user page* (`<user>.github.io`) cũng đúng.
- Trên GitHub Pages không có backend: tiến độ nằm trong **cookie của trình duyệt** (mất khi xóa cookie / đổi máy). Dữ liệu localStorage phiên bản cũ (nếu có) sẽ tự động được chuyển sang cookie một lần.
- Muốn dùng tên miền riêng: thêm file `docs/CNAME` chứa tên miền.

## 4. Cấu trúc

```
├── index.html
├── vite.config.js        # base './', outDir 'docs'
├── tailwind.config.js
├── scripts/postbuild.mjs # tạo .nojekyll + 404.html
├── scripts/build-single.mjs # gộp toàn bộ web vào 1 file index.html
├── public/figures/       # 34 hình cắt từ 4 đề PDF
├── src/
│   ├── App.jsx           # khung app, 5 tab, điều hướng, lưu tiến độ
│   ├── components/       # HomeView, RoadmapPage, KnowledgeView, TestListView,
│   │                     # MyProgressView, TestRunner, MathText, ContactBox
│   ├── data/             # knowledgeData, roadmapData, practiceSets, examsData, contactData,
│   │                     # questionBank.js (400 câu = 10 dạng × 40 câu)
│   └── utils/            # storage.js (cookie), grading.js (chấm GDPT 2018)
├── docs/                 # bản build sẵn để GitHub Pages phục vụ
└── .github/workflows/deploy.yml
```

## 5. Thang điểm chuẩn (GDPT 2018)

- **Phần I:** 12 câu × 0,25đ = 3,0đ.
- **Phần II:** mỗi câu 4 ý — đúng 1 ý 0,1đ, 2 ý 0,25đ, 3 ý 0,5đ, 4 ý 1,0đ → tối đa 4,0đ.
- **Phần III:** 6 câu × 0,5đ = 3,0đ.
