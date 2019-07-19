import { QuillConfig, QuillToolbarConfig, QuillModules } from 'ngx-quill';

 export const editorModules: QuillModules = {
     clipboard: {
         matchVisual: false, // Prevent editor from creating extra pharagraphs?
     },
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],        // toggled buttons
  
    [{ 'header': 2 }],                                                // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],                      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],                          // outdent/indent
  
      [{ 'header': [2, 3, 4, 5, 6, false] }],
  
      [{ 'align': [] }],
      ['clean'],                                                        // remove formatting button
      ['link', 'image', 'video'],                                      // link and image, video.
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