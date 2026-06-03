#!/usr/bin/env python3
"""Standalone static server for the Fim showcase package."""

from __future__ import annotations

import argparse
import os
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent


class ShowcaseHandler(SimpleHTTPRequestHandler):
    """Serve the exported showcase files without depending on the main app."""

    def end_headers(self) -> None:
        self.send_header("Cache-Control", "no-store")
        super().end_headers()


def make_server(host: str, port: int) -> ThreadingHTTPServer:
    handler = partial(ShowcaseHandler, directory=str(ROOT))
    return ThreadingHTTPServer((host, port), handler)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run the standalone Fim showcase.")
    parser.add_argument(
        "port",
        nargs="?",
        type=int,
        default=int(os.environ.get("PORT", "8788")),
        help="Port to listen on. Defaults to 8788 or the PORT environment variable.",
    )
    parser.add_argument(
        "--host",
        default=os.environ.get("HOST", "127.0.0.1"),
        help="Host to bind. Defaults to 127.0.0.1.",
    )
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    server = make_server(args.host, args.port)
    url = f"http://{args.host}:{args.port}/"
    print(f"Fim showcase is running at {url}")
    print("Press Ctrl+C to stop.")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
