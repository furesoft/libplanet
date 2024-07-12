using System;
using System.Collections.Immutable;
using Libplanet.Consensus;
using Libplanet.Crypto;
using Xunit;

namespace Libplanet.Tests.Consensus
{
    public class DominantLotTest
    {
        private readonly Lot _lot;
        private readonly PrivateKey _prover;
        private readonly PrivateKey _signer;
        private readonly DominantLotMetadata _dominantLotMetadata;
        private readonly DominantLot _dominantLot;

        public DominantLotTest()
        {
            _prover = new PrivateKey();
            _signer = new PrivateKey();
            _lot = new ConsensusInformation(0, 0, null).ToLot(_prover);
            _dominantLotMetadata = new DominantLotMetadata(
                _lot, DateTimeOffset.MinValue, _signer.PublicKey);
            _dominantLot = _dominantLotMetadata.Sign(_signer);
        }

        [Fact]
        public void Constructor()
        {
            Assert.Throws<ArgumentNullException>(
                () => new DominantLot(
                    _dominantLotMetadata,
                    ImmutableArray<byte>.Empty));
            Assert.Throws<ArgumentException>(
                () => new DominantLot(
                    _dominantLotMetadata,
                    ImmutableArray.Create<byte>(0x00, 0x00)));
            Assert.Throws<ArgumentException>(
                () => new DominantLot(
                    _dominantLotMetadata,
                    new PrivateKey().Sign(_dominantLotMetadata.ByteArray)));
            var signature = _signer.Sign(_dominantLotMetadata.ByteArray);
            var dominantLot = new DominantLot(_dominantLotMetadata, signature);
            Assert.Equal(_dominantLot, dominantLot);
            Assert.Equal(_dominantLotMetadata.Height, dominantLot.Height);
            Assert.Equal(_dominantLotMetadata.Round, dominantLot.Round);
            Assert.Equal(_dominantLotMetadata.Lot, dominantLot.Lot);
            Assert.Equal(_dominantLotMetadata.Timestamp, dominantLot.Timestamp);
            Assert.Equal(_signer.PublicKey, dominantLot.ValidatorPublicKey);
            Assert.Equal(signature, dominantLot.Signature);
            Assert.Equal(_dominantLot, new DominantLot(_dominantLot.Bencoded));
            Assert.Equal(_dominantLot, new DominantLot(_dominantLot.ByteArray));

            // DominantLotMetadata can be generated by non-prover.
            Assert.NotEqual(_prover.PublicKey, _dominantLot.ValidatorPublicKey);
        }

        [Fact]
        public void Equal()
        {
            Assert.Equal(
                _dominantLot,
                _dominantLotMetadata
                .Sign(_signer));
            Assert.NotEqual(
                _dominantLot,
                new DominantLotMetadata(
                    new ConsensusInformation(0, 0, null).ToLot(new PrivateKey()),
                    DateTimeOffset.MinValue,
                    _signer.PublicKey)
                .Sign(_signer));
            Assert.NotEqual(
                _dominantLot,
                new DominantLotMetadata(
                    _lot, DateTimeOffset.MaxValue, _signer.PublicKey)
                .Sign(_signer));
            var stranger = new PrivateKey();
            Assert.NotEqual(
                _dominantLot,
                new DominantLotMetadata(
                    _lot, DateTimeOffset.MinValue, stranger.PublicKey)
                .Sign(stranger));
        }

        [Fact]
        public void HashCode()
        {
            Assert.Equal(
                _dominantLot.GetHashCode(),
                _dominantLotMetadata
                .Sign(_signer).GetHashCode());
            Assert.NotEqual(
                _dominantLot.GetHashCode(),
                new DominantLotMetadata(
                    new ConsensusInformation(0, 0, null).ToLot(new PrivateKey()),
                    DateTimeOffset.MinValue,
                    _signer.PublicKey)
                .Sign(_signer).GetHashCode());
            Assert.NotEqual(
                _dominantLot.GetHashCode(),
                new DominantLotMetadata(
                    _lot, DateTimeOffset.MaxValue, _signer.PublicKey)
                .Sign(_signer).GetHashCode());
            var stranger = new PrivateKey();
            Assert.NotEqual(
                _dominantLot.GetHashCode(),
                new DominantLotMetadata(
                    _lot, DateTimeOffset.MinValue, stranger.PublicKey)
                .Sign(stranger).GetHashCode());
        }
    }
}