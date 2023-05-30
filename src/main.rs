use actix_files as fs;
use actix_web::{middleware, HttpRequest, Result};
use actix_web::{web, App, HttpServer};
use std::path::PathBuf;


/// https://actix.rs/docs/static-files/
async fn index(_req: HttpRequest) -> Result<fs::NamedFile> {
  let path: PathBuf = "./static/index.html".parse().unwrap();
  Ok(fs::NamedFile::open(path)?)
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {

  std::env::set_var("RUST_LOG", "actix_web=info");
  env_logger::init();

  HttpServer::new(move || App::new()
          .wrap(middleware::Logger::new("%a %r %s"))
          .service(fs::Files::new("/static", "./static").show_files_listing())
          .route("/", web::get().to(index))
          )
    .bind(("0.0.0.0", 80))?
    .run()
    .await
}
