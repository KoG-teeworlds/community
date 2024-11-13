{ pkgs ? import <nixpkgs> {} }: pkgs.mkShell {
  packages = [
    pkgs.bun
    pkgs.nodejs
  ];
  shellHook = ''
    echo bun $(bun --version)
    echo node $(node --version)
  '';
}