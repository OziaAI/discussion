{pkgs ? import <nixpkgs> {} }:
pkgs.mkShell {
    buildInputs = [
        pkgs.nodejs_20
        pkgs.nodePackages_latest.prettier
    ];
}
