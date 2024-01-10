export type SearchParamProps = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export type ActionsResult =
  | {
      isSuccess: true
      message: string
    }
  | {
      isSuccess: false
      error: {
        message: string
      }
    }
