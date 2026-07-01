export type FileUploadProps = {
    accepts: string[];
    maxSize: number;
    maxFiles?: number;
    onFileUpload: (file: FileUploadFile, updateFile: (FileUploadFile: any) => void) => void;
};
export type FileUploadFile = File & {
    errorMessage: string;
    formatError: boolean;
    sizeError: boolean;
    progress: number;
    processed: boolean;
    fileSize?: number;
    fileName: string;
};
export type FileUploadStatusProps = {
    file: FileUploadFile;
    onFileUpload?: (file: FileUploadFile, updateFile: (FileUploadFile: any) => void) => void;
};
export type FileUploadFormProps = Pick<FileUploadProps, "accepts" | "maxSize" | "onFileUpload">;
type baseStyle = {
    border?: string;
    background?: string;
    text?: string;
    secondaryText?: string;
};
export type FileUploadType = {
    default: {
        container: baseStyle;
        icon: baseStyle;
        iconTrash: baseStyle;
    };
    hover: {
        container?: baseStyle;
        icon?: baseStyle;
        iconTrash?: baseStyle;
    };
    error: {
        container?: baseStyle;
        icon?: baseStyle;
        iconTrash?: baseStyle;
    };
};
export {};
