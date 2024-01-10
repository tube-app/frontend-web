/**
 * 認証が必要ないルートの配列
 */
export const publicRoutes: string[] = []

/**
 * 認証に使用されるルートの配列
 */
export const authRoutes: string[] = ["/sign-in"]

/**
 * API認証ルートのプレフィックス
 */
export const apiAuthPrefix: string = "/api/auth"

/**
 * ログイン後のデフォルトリダイレクトパス
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/"
