
# 图片上传与速度优化指南 (Image & Speed Guide)

为了保证网站在国内的打开速度，请务必关注以下几点：

## 1. 图片体积优化 (CRITICAL)
国内加载慢很大程度是因为图片文件太大。请在上传前进行压缩：
- **推荐工具**: [TinyPNG](https://tinypng.com/) 或 [Squoosh](https://squoosh.app/)。
- **目标大小**: 单张图片尽量控制在 **200KB** 以内，Logo和图标控制在 **20KB** 以内。
- **推荐格式**: 如果可以，将图片转换为 `.webp` 格式（并在代码中对应更新后缀名），体积会比 `.png` 小很多。

## 2. 必需图片 (Required Filenames)
请确保文件名完全一致（全小写）：
- `logo.png`
- `about.png`
- `oem.png`
- `odm.png`
- `product-showcase.png`
- `brand-1.png` 到 `brand-10.png`
- `factory-1.png` 到 `factory-6.png`

## 3. CDN 加速建议
目前代码中图片是从本地 `public` 文件夹加载的。如果依然觉得慢，建议：
1. 使用国内的云服务存储（如 阿里云OSS、腾讯云COS）。
2. 在 `constants.ts` 的 `ASSET_URL` 中填入云存储的访问地址。
