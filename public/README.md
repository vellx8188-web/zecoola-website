
# 网站加速与图片管理指南 (Speed Optimization Guide)

为了让国内用户也能秒开网站，请遵循以下图片处理流程：

## 1. 强制使用 WebP 格式 (MANDATORY)
代码已配置为优先加载 `.webp` 图片。
- **操作步骤**: 使用 [Squoosh.app](https://squoosh.app/) 将您的 PNG 原始图片转换为 WebP。
- **目标体积**: 大背景图（如 about, oem, odm）务必控制在 **150KB - 300KB** 之间。
- **文件清单**:
  - `about.webp`
  - `oem.webp`
  - `odm.webp`
  - `product-showcase.webp`
  - `factory-1.webp` 到 `factory-6.webp`

## 2. 小图片使用 PNG
Logo 和品牌图标因为本身很小（建议控制在 20KB 以内），建议继续使用 `.png` 以保证兼容性。
- `logo.png`
- `brand-1.png` 到 `brand-10.png`

## 3. 为什么不直接用 CDN？
目前图片是放在您自己的 `public` 文件夹中。如果您发现图片加载依然吃力，建议：
1. 注册一个阿里云 OSS 或 腾讯云 COS。
2. 将图片上传上去。
3. 在 `constants.ts` 中将 `ASSET_URL` 改为您云存储的地址。

这样图片将通过国内的 CDN 节点分发，速度会达到极致。
