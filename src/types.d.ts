
export interface DownloadAsset {
  url: string;
  name: string;
  content_type: string;
  size: number;
  created_at: string;
  updated_at: string;
  version: string;
  platform: string;
  arch: string;
  type: "install";
  extension: string
}