import { QuillConfig, QuillToolbarConfig, QuillModules } from 'ngx-quill';

 export const editorModules: QuillModules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],        // toggled buttons
  
      [{ 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    //   [{ 'direction': 'rtl' }],                         // text direction
  
    //   [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [2, 3, 4, 5, 6, false] }],
  
    //   [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    //   [{ 'font': [] }],
      [{ 'align': [] }],
      ['clean'],                                         // remove formatting button
      ['link', 'image', 'video']        ,                 // link and image, video.
      ['showHtml']
    ]
  };

  export const editorConfig: QuillConfig = {
    // bounds?: HTMLElement | string;
    // debug?: 'error' | 'warn' | 'log' | false;
    // format?: QuillFormat;
    // formats?: any;
    modules: editorModules ,
    // placeholder?: string;
    // readOnly?: boolean;
    // scrollingContainer?: HTMLElement | string | null;
    // theme: 'snow'
    // trackChanges?: 'user' | 'all';
  }