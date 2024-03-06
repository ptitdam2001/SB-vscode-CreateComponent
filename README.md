# Create Component - VSCode Extension

## Description

This extension is made to easily create a React component with all the basic files:

- `index.tsx` with default export
- `<component>.tsx`
- `<component>.stories.tsx` - Storybook integration
- `<component>.test.tsx` - unit testing with jest/vitest
- `<component>.scss`

This extension is made to easily create a React Hook with all the basic files:

- `index.ts` with default export
- `<hook>.ts`
- `<hook>.test.tsx` - unit testing with jest/vitest

## Extension Compilation

### vsce

vsce, short for "Visual Studio Code Extensions", is a command-line tool for packaging, publishing and managing VS Code extensions.

#### Installation

Make sure you have Node.js installed. Then run:

```
npm install -g @vscode/vsce
```

#### Usage

You can use vsce to easily package and publish your extensions:

```
$ cd myExtension
$ npx @vscode/vsce package
# myExtension.vsix generated
$ vsce publish
# <publisher id>.myExtension published to VS Code Marketplace
```

vsce can also search, retrieve metadata, and unpublish extensions. For a reference on all the available vsce commands, run `vsce --help`.

## Install

1. Open Visual Studio Code.
2. Go to Extensions tab.
3. Search "Create component" in search bar.
4. Click on "Install"

## Use

1. Step 1 : Open your project in Visual Studio Code.
2. Step 2 : Use the `cmd+shift+P` keyboard shortcut.
3. Step 3 : Type "Create component" or "Create hook" and select the extension.
4. Step 4 : Choose the target folder.
5. Step 5 : Enter your component/hook's name.
6. Step 6 : Enjoy your files automatically created.

## Configuration

No specific configuration needed.

## Contribution

You can contribute improving this extension by :

1. Fork the project.
2. Create a branch with your updates (`git checkout -b <branche_name>`).
3. Commit (`git commit -m 'your message'`).
4. Push (`git push origin <branche_name>`).
5. Open a pull request on Github.

---

Developed by [Joris](https://github.com/midayex)
