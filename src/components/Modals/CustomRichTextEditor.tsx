/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  AlignCenter,
  AlignLeft,
  AlignRight,
  Bold,
  Eraser,
  Italic,
  Link,
  List,
  ListOrdered,
  Underline,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function CustomEditor({
  value,
  onChange,
}: {
  value: string;
  onChange: (val: string) => void;
}) {
  const editorRef = useRef<HTMLDivElement | null>(null);
  const [activeFormats, setActiveFormats] = useState<Set<string>>(new Set());

  const exec = (cmd: string, val?: string) => {
    document.execCommand(cmd, false, val);
    editorRef.current?.focus();
    setTimeout(updateActiveFormats, 10);
  };

  const updateActiveFormats = () => {
    if (!editorRef.current?.contains(document.activeElement)) return;

    const formats = new Set<string>();

    try {
      if (document.queryCommandState("bold")) formats.add("bold");
      if (document.queryCommandState("italic")) formats.add("italic");
      if (document.queryCommandState("underline")) formats.add("underline");

      const blockFormat = document.queryCommandValue("formatBlock");
      if (blockFormat) {
        const normalized = blockFormat.toLowerCase().replace(/<|>/g, "");
        formats.add(normalized);
      }

      if (document.queryCommandState("justifyLeft")) formats.add("left");
      if (document.queryCommandState("justifyCenter")) formats.add("center");
      if (document.queryCommandState("justifyRight")) formats.add("right");
      if (document.queryCommandState("insertUnorderedList")) formats.add("ul");
      if (document.queryCommandState("insertOrderedList")) formats.add("ol");
    } catch (e) {
      // ugnore
    }

    setActiveFormats(formats);
  };

  useEffect(() => {
    const handleSelectionChange = () => {
      if (editorRef.current?.contains(document.activeElement)) {
        updateActiveFormats();
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);
    return () => {
      document.removeEventListener("selectionchange", handleSelectionChange);
    };
  }, []);

  useEffect(() => {
    // Only set innerHTML if the editor is empty or not focused
    if (
      editorRef.current &&
      !editorRef.current.contains(document.activeElement)
    ) {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value;
      }
    }
  }, [value]);

  const isActive = (format: string) => activeFormats.has(format);

  const ToolbarButton = ({
    onClick,
    active,
    title,
    children,
  }: {
    onClick: () => void;
    active: boolean;
    title: string;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onMouseDown={(e) => {
        e.preventDefault();
        onClick();
      }}
      title={title}
      className={`p-2 rounded transition-colors ${
        active ? "bg-[#243C7B] text-white" : "hover:bg-gray-200 text-gray-700"
      }`}
    >
      {children}
    </button>
  );

  const HeadingButton = ({
    level,
    label,
  }: {
    level: string;
    label: string;
  }) => (
    <button
      type="button"
      onMouseDown={(e) => {
        e.preventDefault();
        exec("formatBlock", `<${level}>`);
      }}
      className={`px-2.5 py-1 rounded text-sm font-semibold transition-colors ${
        isActive(level)
          ? "bg-[#243C7B] text-white"
          : "hover:bg-gray-200 text-gray-700"
      }`}
      title={`Heading ${label}`}
    >
      {label}
    </button>
  );

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col gap-1 mb-2">
        <p className="text-sm text-gray-500">
          Use the toolbar to format your text with bold, italic, headers, lists,
          and more.
        </p>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
        <div className="flex flex-wrap items-center gap-1 px-3 py-2 border-b border-gray-200 bg-gray-50">
          <ToolbarButton
            onClick={() => exec("bold")}
            active={isActive("bold")}
            title="Bold (Ctrl+B)"
          >
            <Bold size={16} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => exec("italic")}
            active={isActive("italic")}
            title="Italic (Ctrl+I)"
          >
            <Italic size={16} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => exec("underline")}
            active={isActive("underline")}
            title="Underline (Ctrl+U)"
          >
            <Underline size={16} />
          </ToolbarButton>

          <div className="w-px h-6 bg-gray-300 mx-1"></div>

          <HeadingButton level="h1" label="H1" />
          <HeadingButton level="h2" label="H2" />
          <HeadingButton level="h3" label="H3" />
          <HeadingButton level="p" label="P" />

          <div className="w-px h-6 bg-gray-300 mx-1"></div>

          <ToolbarButton
            onClick={() => exec("justifyLeft")}
            active={isActive("left")}
            title="Align Left"
          >
            <AlignLeft size={16} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => exec("justifyCenter")}
            active={isActive("center")}
            title="Align Center"
          >
            <AlignCenter size={16} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => exec("justifyRight")}
            active={isActive("right")}
            title="Align Right"
          >
            <AlignRight size={16} />
          </ToolbarButton>

          <div className="w-px h-6 bg-gray-300 mx-1"></div>

          <ToolbarButton
            onClick={() => exec("insertUnorderedList")}
            active={isActive("ul")}
            title="Bullet List"
          >
            <List size={16} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => exec("insertOrderedList")}
            active={isActive("ol")}
            title="Numbered List"
          >
            <ListOrdered size={16} />
          </ToolbarButton>

          <div className="w-px h-6 bg-gray-300 mx-1"></div>

          <ToolbarButton
            onClick={() => {
              const url = prompt("Enter URL:");
              if (url) exec("createLink", url);
            }}
            active={false}
            title="Insert Link"
          >
            <Link size={16} />
          </ToolbarButton>

          <ToolbarButton
            onClick={() => exec("removeFormat")}
            active={false}
            title="Clear Formatting"
          >
            <Eraser size={16} />
          </ToolbarButton>
        </div>

        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          className="min-h-[200px] p-4 focus:outline-none text-gray-800"
          onInput={(e) => {
            onChange(e.currentTarget.innerHTML);
            updateActiveFormats();
          }}
          onKeyUp={updateActiveFormats}
          onMouseUp={updateActiveFormats}
          onFocus={updateActiveFormats}
          style={{
            wordWrap: "break-word",
            overflowWrap: "break-word",
          }}
        />
      </div>
    </div>
  );
}
