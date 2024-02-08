"use client";
import { useEffect, useState } from "react";
import ReactHtmlParser from "react-html-parser";
import {
  Box,
  Card,
  Center,
  Chip,
  ChipGroup,
  CloseButton,
  Divider,
  Group,
  Image,
  Input,
  InputWrapper,
  Paper,
  ScrollArea,
  SimpleGrid,
  Text,
  Title,
  rem,
} from "@mantine/core";
import { RichTextEditor, Link } from "@mantine/tiptap";
import { BubbleMenu, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import Placeholder from "@tiptap/extension-placeholder";
import classes from "./page.module.css";
import { DateInput } from "@mantine/dates";
import {
  Dropzone,
  DropzoneAccept,
  DropzoneIdle,
  DropzoneReject,
  IMAGE_MIME_TYPE,
} from "@mantine/dropzone";
import { IconPhoto, IconUpload, IconX } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";

// export const metadata = {
//   title: "Admin | Freiwillige Feuerwehr Leopoldsdorf",
//   description: "Admin Interface Freiwilligen Feuerwehr Leopoldsdorf",
// };

export default function BeitraegeNeuerBeitrag() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState('<p style="text-align: justify"></p>');
  const [type, setType] = useState("allgemein");
  const [date, setDate] = useState(new Date());
  const [titleImg, setTitleImg] = useState(null);
  const [optionalImg, setOptionalImg] = useState(null);

  console.log("");

  const iconStyle = { width: rem(18), height: rem(18) };
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      Placeholder.configure({ placeholder: "Beitragstext" }),
    ],
    content: text,
    onUpdate({ editor }) {
      setText(editor.getHTML());
    },
  });

  const handleFileDrop = (files) => {
    if (files.length > 0 && files.length < 2) {
      setTitleImg(files[0]);
    } else {
      notifications.show({
        id: "title-image-error",
        withCloseButton: true,
        withBorder: true,
        autoClose: 10000,
        title: "Zu viele Bilder ausgewählt!",
        message: "Du kannst nur ein Bild als Titelbild auswählen!",
        color: "red",
        loading: false,
      });
    }
  };

  const handleImageDelete = () => {
    setTitleImg(null);
  };

  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width < 1200;

  return (
    <Card h={"100%"} mah={"100%"}>
      {isMobile ? (
        <ScrollArea h={"100%"} type="scroll">
          <InputWrapper mb={16}>
            <Input
              size="lg"
              placeholder="Beitragstitel"
              classNames={classes}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </InputWrapper>

          <DateInput
            size="md"
            mb={16}
            value={date}
            onChange={setDate}
            classNames={classes}
            valueFormat="DD.MM.YYYY"
            placeholder="Datum"
            clearable
          />

          <ChipGroup value={type} onChange={setType}>
            <Group justify="center" gap="xl" mt={16} mb={34}>
              <Chip value="allgemein" color="red.7" size="md">
                Allgemeines
              </Chip>
              <Chip value="einsatz" color="red.7" size="md">
                Einsatz
              </Chip>
              <Chip value="uebung" color="red.7" size="md">
                Übung
              </Chip>
              <Chip value="jugend" color="red.7" size="md">
                Jugend
              </Chip>
            </Group>
          </ChipGroup>

          <Divider mb={34} />

          <Title ta="center" order={4} mb={16}>
            Titelbild
          </Title>
          {titleImg ? (
            <Paper
              style={{ position: "relative", padding: "16px" }}
              mb={34}
              withBorder
            >
              <Image
                src={URL.createObjectURL(titleImg)}
                height={300}
                fit="contain"
                alt="Uploaded"
              />
              <CloseButton
                color="red"
                size="lg"
                onClick={handleImageDelete}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  fontWeight: "bold",
                }}
              />
            </Paper>
          ) : (
            <Dropzone
              onDrop={handleFileDrop}
              onReject={(files) => console.log("rejected files", files)}
              accept={IMAGE_MIME_TYPE}
              mb={34}
              h={332}
            >
              <Group
                justify="center"
                gap="xl"
                mih={300}
                style={{ pointerEvents: "none" }}
              >
                <DropzoneAccept>
                  <IconUpload
                    style={{
                      width: rem(52),
                      height: rem(52),
                      color: "var(--mantine-color-blue-6)",
                    }}
                    stroke={1.5}
                  />
                </DropzoneAccept>
                <DropzoneReject>
                  <IconX
                    style={{
                      width: rem(52),
                      height: rem(52),
                      color: "var(--mantine-color-red-6)",
                    }}
                    stroke={1.5}
                  />
                </DropzoneReject>
                <DropzoneIdle>
                  <IconPhoto
                    style={{
                      width: rem(52),
                      height: rem(52),
                      color: "var(--mantine-color-dimmed)",
                    }}
                    stroke={1.5}
                  />
                </DropzoneIdle>
                <div>
                  <Text size="xl" inline>
                    Bild hineinziehen oder hier klicken
                  </Text>
                  <Text size="sm" c="dimmed" inline mt={7}>
                    Max. 1 Bild erlaubt
                  </Text>
                </div>
              </Group>
            </Dropzone>
          )}

          <Title ta="center" order={4} mb={16}>
            Weitere Bilder (optional)
          </Title>

          <Divider mb={34} />
          <RichTextEditor
            editor={editor}
            h={600}
            mah={600}
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
        </ScrollArea>
      ) : (
        <>
          <InputWrapper mb={16}>
            <Input
              size="lg"
              placeholder="Beitragstitel"
              classNames={classes}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </InputWrapper>

          <SimpleGrid cols={{ base: 1, sm: 1, lg: 2 }} h={"100%"}>
            <div>
              <DateInput
                size="md"
                mb={16}
                value={date}
                onChange={setDate}
                classNames={classes}
                valueFormat="DD.MM.YYYY"
                placeholder="Datum"
                clearable
              />

              <ChipGroup value={type} onChange={setType}>
                <Group justify="center" gap="xl" mt={16} mb={34}>
                  <Chip value="allgemein" color="red.7" size="md">
                    Allgemeines
                  </Chip>
                  <Chip value="einsatz" color="red.7" size="md">
                    Einsatz
                  </Chip>
                  <Chip value="uebung" color="red.7" size="md">
                    Übung
                  </Chip>
                  <Chip value="jugend" color="red.7" size="md">
                    Jugend
                  </Chip>
                </Group>
              </ChipGroup>

              <Divider mb={34} />

              <Title ta="center" order={4} mb={16}>
                Titelbild
              </Title>
              {titleImg ? (
                <Paper
                  style={{ position: "relative", padding: "16px" }}
                  mb={34}
                  withBorder
                >
                  <Image
                    src={URL.createObjectURL(titleImg)}
                    height={300}
                    fit="contain"
                    alt="Uploaded"
                  />
                  <CloseButton
                    color="red"
                    size="lg"
                    onClick={handleImageDelete}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      fontWeight: "bold",
                    }}
                  />
                </Paper>
              ) : (
                <Dropzone
                  onDrop={handleFileDrop}
                  onReject={(files) => console.log("rejected files", files)}
                  accept={IMAGE_MIME_TYPE}
                  mb={34}
                  h={332}
                >
                  <Group
                    justify="center"
                    gap="xl"
                    mih={300}
                    style={{ pointerEvents: "none" }}
                  >
                    <DropzoneAccept>
                      <IconUpload
                        style={{
                          width: rem(52),
                          height: rem(52),
                          color: "var(--mantine-color-blue-6)",
                        }}
                        stroke={1.5}
                      />
                    </DropzoneAccept>
                    <DropzoneReject>
                      <IconX
                        style={{
                          width: rem(52),
                          height: rem(52),
                          color: "var(--mantine-color-red-6)",
                        }}
                        stroke={1.5}
                      />
                    </DropzoneReject>
                    <DropzoneIdle>
                      <IconPhoto
                        style={{
                          width: rem(52),
                          height: rem(52),
                          color: "var(--mantine-color-dimmed)",
                        }}
                        stroke={1.5}
                      />
                    </DropzoneIdle>
                    <div>
                      <Text size="xl" inline>
                        Bild hineinziehen oder hier klicken
                      </Text>
                      <Text size="sm" c="dimmed" inline mt={7}>
                        Max. 1 Bild als Titelbild erlaubt
                      </Text>
                    </div>
                  </Group>
                </Dropzone>
              )}

              <Title ta="center" order={4} mb={16}>
                Weitere Bilder (optional)
              </Title>
            </div>
            <div>
              <RichTextEditor
                editor={editor}
                h={"100%"}
                mah={"100%"}
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
            </div>
          </SimpleGrid>
        </>
      )}
    </Card>
  );
}
