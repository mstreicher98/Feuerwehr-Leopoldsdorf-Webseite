"use client";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { BubbleMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import {
  Card,
  Input,
  InputWrapper,
  Tabs,
  TabsList,
  TabsPanel,
  TabsTab,
  rem,
} from "@mantine/core";
import { IconPhoto, IconSettings, IconTextSize } from "@tabler/icons-react";
import classes from "./page.module.css";
import Placeholder from "@tiptap/extension-placeholder";
import { useState } from "react";
import ReactHtmlParser from 'react-html-parser';
// export const metadata = {
//   title: "Admin | Freiwillige Feuerwehr Leopoldsdorf",
//   description: "Admin Interface Freiwilligen Feuerwehr Leopoldsdorf",
// };

export default function BeitraegeNeuerBeitrag() {
  const [title, setTitle] = useState();
  const [text, setText] = useState();
  const [type, setType] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  
  const iconStyle = { width: rem(18), height: rem(18) };
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Beitragstext" }),
    ],
    content: "",
    onUpdate({ editor }) {
      setText(editor.getHTML());
    },
  });

  return (
    <Card h={"100%"} mah={"100%"}>
      <Tabs defaultValue="text" classNames={classes}>
        <TabsList grow justify="center">
          <TabsTab
            value="text"
            leftSection={<IconTextSize style={iconStyle} />}
          >
            Beitrag
          </TabsTab>
          <TabsTab value="bilder" leftSection={<IconPhoto style={iconStyle} />}>
            Bilder
          </TabsTab>
          <TabsTab
            value="einstellungen"
            leftSection={<IconSettings style={iconStyle} />}
          >
            Einstellungen
          </TabsTab>
        </TabsList>

        <TabsPanel value="text" mt={16}>
          <InputWrapper mb={16}>
            <Input size="lg" placeholder="Beitragstitel" classNames={classes} />
          </InputWrapper>

          <RichTextEditor
            editor={editor}
            h={1000}
            mah={1000}
            styles={{
              root: {
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
              },
              typographyStylesProvider: {
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                overflowY: "auto",
              },
              content: {
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",

                "& > .ProseMirror": {
                  flexGrow: 1,
                },
              },
            }}
          >
            <RichTextEditor.Toolbar sticky>
              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Bold />
                <RichTextEditor.Italic />
                <RichTextEditor.Underline />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Hr />
                <RichTextEditor.BulletList />
                <RichTextEditor.OrderedList />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Link />
                <RichTextEditor.Unlink />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.AlignLeft />
                <RichTextEditor.AlignCenter />
                <RichTextEditor.AlignJustify />
                <RichTextEditor.AlignRight />
              </RichTextEditor.ControlsGroup>

              <RichTextEditor.ControlsGroup>
                <RichTextEditor.Undo />
                <RichTextEditor.Redo />
              </RichTextEditor.ControlsGroup>
            </RichTextEditor.Toolbar>
            {editor && (
              <BubbleMenu editor={editor}>
                <RichTextEditor.ControlsGroup>
                  <RichTextEditor.Bold />
                  <RichTextEditor.Italic />
                  <RichTextEditor.Link />
                </RichTextEditor.ControlsGroup>
              </BubbleMenu>
            )}
            <RichTextEditor.Content
              onChange={(e) => console.log(editor.content)}
            />
          </RichTextEditor>
        </TabsPanel>

        <TabsPanel value="bilder">Messages tab content</TabsPanel>

        <TabsPanel value="einstellungen">{ReactHtmlParser(text)}</TabsPanel>
      </Tabs>
    </Card>
  );
}
