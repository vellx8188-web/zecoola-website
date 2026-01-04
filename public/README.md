
# 网站加速与图片管理指南 (Speed Optimization Guide)

为了让国内用户也能秒开网站，请遵循以下图片处理流程：

## 1. 强制使用 WebP 格式 (MANDATORY)
代码已配置为优先加载 `.webp` 图片。
- **操作步骤**: 使用 [Squoosh.app](https://squoosh.app/) 将您的 PNG 原始图片转换为 WebP。
- **目标体积**: 大背景图务必控制在 **150KB - 350KB** 之间。

## 2. 核心文件清单 (Required Files)

### 首页大屏幻灯片 (Hero Slider V2)
请将高清工业图转换并命名为：
- `hero-1.webp` (1920x1080)
- `hero-2.webp`
- `hero-3.webp`

### 展示与背景 (Backgrounds)
- `about.webp` (工厂概貌)
- `showcase-main.webp` (产品汇总大图)
- `factory-1.webp` 到 `factory-3.webp` (实景展示)

### 标志与图标 (Logos - 建议 PNG)
- `logo-icon.png` (ZA 圆形图标)
- `logo-text.png` (ZECOOLA 文字部分)
- `brand-1.png` 到 `brand-11.png` (合作伙伴Logo)

## 3. 图片优化建议
1. **尺寸控制**：Banner 类图片建议 1920x1080 像素；产品图建议 1200x800 像素。
2. **色调预处理**：Banner 图片建议降低一点对比度或稍微压暗，以增强白色文字的阅读感。

## 4. 为什么不直接用 CDN？
目前图片是放在您自己的 `public` 文件夹中。如果您发现图片加载依然吃力，建议：
1. 注册一个阿里云 OSS 或 腾讯云 COS。
2. 将图片上传上去。
3. 在 `constants.ts` 中将 `ASSET_URL` 改为您云存储的地址。

这样图片将通过国内的 CDN 节点分发，速度会达到极致。
